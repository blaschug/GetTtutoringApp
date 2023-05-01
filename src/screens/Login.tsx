import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CustomInput from '../components/CustomInput';
import AuthHeader from '../components/AuthHeader';

function Login() {
  return (
    <View style={styles.body}>
      <AuthHeader />
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Password" isSecured={true} />
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <View>
          <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.loginButton}>
        <View>
          <Text style={styles.loginButtonText}>Login</Text>
        </View>
      </TouchableOpacity>
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
    justifyContent: 'center',
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
    marginBottom: 20,
    marginTop: 30,
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
