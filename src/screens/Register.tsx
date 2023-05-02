import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AuthInput from '../components/AuthInput';
import AuthHeader from '../components/AuthHeader';
import {registerWithEmailAndPassword} from '../services/authService';
import Separator from '../components/Separator';
import AuthButton from '../components/AuthButton';
import {StackScreenProps} from '@react-navigation/stack';
import {Path} from '../constants/navigation/navigation';
import {RootStackParamList} from '../models/screens';
import {authStyles} from '../constants/styles/genericSheets';
import {colors} from '../constants/styles/styles';

type RegisterProps = StackScreenProps<RootStackParamList, Path.Register>;

function Register({navigation}: RegisterProps) {
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
      <View style={styles.formView}>
        <Text style={errorMessage ? {color: colors.red} : {}}>
          {errorMessage}
        </Text>
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
        <AuthButton message="Register" onPress={onPressRegister} />
      </View>
      <Separator message="Or register with" />
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
});

export default Register;
