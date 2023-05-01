import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AuthInput from '../components/AuthInput';
import AuthHeader from '../components/AuthHeader';
import {registerWithEmailAndPassword} from '../services/authService';

function Register({navigation}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onEmailInputChange = (value: string) => {
    setEmail(value);
  };

  const onPasswordInputChange = (value: string) => {
    setPassword(value);
  };

  const onRepeatedPasswordInputChange = (value: string) => {
    setRepeatedPassword(value);
  };

  const onPressRegister = async () => {
    const result = await registerWithEmailAndPassword(
      email,
      password,
      repeatedPassword,
      setErrorMessage,
    );

    if (result) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.body}>
      <AuthHeader />
      <View style={styles.registerFormView}>
        <Text style={errorMessage ? {color: 'red'} : {}}>{errorMessage}</Text>
        <AuthInput placeholder="Email" onChangeText={onEmailInputChange} />
        <AuthInput
          placeholder="Password"
          isSecured={true}
          onChangeText={onPasswordInputChange}
        />
        <AuthInput
          placeholder="Repeat Password"
          isSecured={true}
          onChangeText={onRepeatedPasswordInputChange}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.registerButton}
          onPress={onPressRegister}>
          <View>
            <Text style={styles.registerButtonText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.separator}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>Or register with</Text>
        <View style={styles.separatorLine} />
      </View>
      <View style={styles.socialButtonView}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            style={styles.socialImage}
            source={require('../../assets/google-logo.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  registerFormView: {
    width: '100%',
    alignItems: 'center',
  },
  errorMessage: {
    width: '75%',
    borderRadius: 10,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  registerButton: {
    width: '75%',
    backgroundColor: '#190152',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 20,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separatorText: {
    color: 'black',
    marginHorizontal: 20,
    fontSize: 15,
    opacity: 0.6,
  },
  separatorLine: {
    height: 1,
    flex: 0.35,
    backgroundColor: 'black',
    opacity: 0.2,
  },
  socialButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  socialButton: {
    marginHorizontal: 15,
  },
  socialImage: {
    height: 70,
    width: 70,
  },
});

export default Register;
