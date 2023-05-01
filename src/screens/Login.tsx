import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AuthInput from '../components/AuthInput';
import AuthHeader from '../components/AuthHeader';
import {signInWithEmailAndPassword} from '../services/authService';

function Login({navigation}: any) {
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
      navigation.navigate('Home');
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
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.loginButton}
          onPress={onPressLogin}>
          <View>
            <Text style={styles.loginButtonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.separator}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>Or login with</Text>
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
  loginButton: {
    width: '75%',
    backgroundColor: '#190152',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
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

export default Login;
