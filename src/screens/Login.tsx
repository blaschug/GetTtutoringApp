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
import {authStyles} from '../constants/styles/genericSheets';
import {colors, fonts, radius} from '../constants/styles/styles';

type LoginProps = StackScreenProps<RootStackParamList, Path.Login>;

function Login({navigation}: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailInputChange = (value: string) => {
    setEmail(value);
  };

  const onPasswordInputChange = (value: string) => {
    setPassword(value);
  };

  const onPressLogin = async () => {
    const loginResult = await signInWithEmailAndPassword(email, password);

    if (loginResult) {
      navigation.navigate(Path.Home);
    }
  };

  return (
    <View style={styles.body}>
      <AuthHeader />
      <View style={styles.formView}>
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
  ...authStyles,
  forgotPasswordButton: {
    width: '75%',
    borderRadius: radius.common,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: colors.lightBlue,
    fontSize: fonts.size.s,
  },
});

export default Login;
