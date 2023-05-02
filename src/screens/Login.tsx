import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AuthInput from '../components/AuthInput';
import AuthHeader from '../components/AuthHeader';
import {signInWithEmailAndPassword} from '../services/authService';
import Separator from '../components/Separator';
import AuthButton from '../components/AuthButton';
import {StackScreenProps} from '@react-navigation/stack';
import {Path} from '../constants/navigation/navigation';
import {RootStackParamList} from '../models/screens';

type LoginProps = StackScreenProps<RootStackParamList, Path.Login>;

function Login({navigation}: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onEmailInputChange = (value: string) => {
    setEmail(value);
  };

  const onPasswordInputChange = (value: string) => {
    setPassword(value);
  };

  const onPressLogin = async () => {
    await signInWithEmailAndPassword(email, password, setErrorMessage);
    if (!errorMessage) {
      navigation.navigate(Path.Home);
    }
  };

  return (
    <View style={styles.body}>
      <AuthHeader />
      <View style={styles.loginFormView}>
        <Text style={errorMessage ? {color: 'red'} : null}>{errorMessage}</Text>
        <AuthInput placeholder="Email" onChangeText={onEmailInputChange} />
        <AuthInput
          placeholder="Password"
          isSecured={true}
          onChangeText={onPasswordInputChange}
        />
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <View>
            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
          </View>
        </TouchableOpacity>
        <AuthButton message="Login" onPress={onPressLogin} />
      </View>
      <Separator message="Or login with" />
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
    flex: 3,
    backgroundColor: '#F6F6F6',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 5,
  },
  loginFormView: {
    width: '100%',
    alignItems: 'center',
  },
  forgotPasswordButton: {
    width: '75%',
    borderRadius: 10,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: '#7DAAF6',
    fontSize: 10,
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

export default Login;
