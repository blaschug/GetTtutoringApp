import auth from '@react-native-firebase/auth';
import {showToast} from './internal/toastAndroid';

export const getCurrentUser = () => {
  return auth().currentUser;
};

export const getIdToken = async () => {
  return await getCurrentUser()?.getIdToken();
};

export const registerWithEmailAndPassword = async (
  email: string,
  password: string,
  repeatedPassword: string,
): Promise<boolean> => {
  let isSuccess = false;
  let errorMessage = '';
  if (!email || !password || !repeatedPassword) {
    errorMessage = 'All fields need to be filled!';
  } else if (repeatedPassword !== password) {
    errorMessage = 'Passwords are not equal!';
  } else {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        isSuccess = true;
      })
      .catch(error => {
        errorMessage = getErrorMessage(error.code);
        console.error(error);
      });
  }

  errorMessage && showToast(errorMessage);
  return isSuccess;
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  let isSuccess = false;
  let errorMessage = '';

  if (!email || !password) {
    errorMessage = 'All fields need to be filled!';
  } else {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        isSuccess = true;
      })
      .catch(error => {
        errorMessage = getErrorMessage(error.code);
        console.error(error);
      });
  }

  errorMessage && showToast(errorMessage);
  return isSuccess;
};

function getErrorMessage(code: string): string {
  let message = '';

  if (code === 'auth/user-not-found') {
    message = 'Email not found!';
  }

  if (code === 'auth/invalid-email') {
    message = 'Invaild email address!';
  }

  if (code === 'auth/wrong-password') {
    message = 'Invalid credentials!';
  }

  if (code === 'auth/email-already-in-use') {
    message = 'Email address is already in use!';
  }

  if (code === 'auth/weak-password') {
    message = 'Password is not strong enough!';
  }

  return message;
}
