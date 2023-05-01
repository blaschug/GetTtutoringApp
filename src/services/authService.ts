import auth from '@react-native-firebase/auth';

export const registerWithEmailAndPassword = async (
  email: string,
  password: string,
  repeatedPassword: string,
  setErrorMessage: (message: string) => void,
): Promise<boolean> => {
  let isSuccess = false;

  if (!email || !password || !repeatedPassword) {
    setErrorMessage('All fields need to be filled!');
  } else if (repeatedPassword !== password) {
    setErrorMessage('Passwords are not equal!');
  } else {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        setErrorMessage('');
        isSuccess = true;
      })
      .catch(error => {
        setErrorMessage(getErrorMessage(error.code));
        console.error(error);
      });
  }

  return isSuccess;
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
  setErrorMessage: (message: string) => void,
) => {
  let isSuccess = false;
  if (!email || !password) {
    setErrorMessage('All fields need to be filled!');
  } else {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        setErrorMessage('');
        isSuccess = true;
      })
      .catch(error => {
        setErrorMessage(getErrorMessage(error.code));
        console.error(error);
      });
  }

  return isSuccess;
};

function getErrorMessage(code: string): string {
  let message = '';

  if (code === 'auth/user-not-found') {
    message = 'User corresponding to the given emai!';
  }

  if (code === 'auth/invalid-email') {
    message = 'That email address is invalid!';
  }

  if (code === 'auth/wrong-password') {
    message = 'Invalid credentials!';
  }

  if (code === 'auth/email-already-in-use') {
    message = 'That email address is already in use!';
  }

  if (code === 'auth/weak-password') {
    message = 'Password is not strong enough!';
  }

  return message;
}
