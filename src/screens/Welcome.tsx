import React, {Suspense, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthHeader from '../components/AuthHeader';
import AuthButton from '../components/AuthButton';
import {colors, fonts} from '../constants/styles/styles';
import {Path} from '../constants/navigation/navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../models/screens';
import {getCurrentUser} from '../services/authService';

type WelcomeProps = StackScreenProps<RootStackParamList, Path.Welcome>;

function Welcome({navigation}: WelcomeProps) {
  const user = getCurrentUser();

  useEffect(() => {
    if (user) {
      navigation.navigate(Path.Home);
    }
  });

  const onPressLogin = () => {
    navigation.navigate(Path.Login);
  };

  const onPressRegister = () => {
    navigation.navigate(Path.Register);
  };

  return (
    <View style={styles.body}>
      <AuthHeader />
      <Suspense fallback={<>loading...</>}>
        <View style={styles.spaceBetweenLogoAndButtons}>
          <Text style={styles.text}>Le meto info de algo aca?</Text>
        </View>
      </Suspense>

      <View style={styles.buttonsView}>
        <AuthButton message="Register" onPress={onPressRegister} />
        <AuthButton message="Login" onPress={onPressLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 0.8,
    margin: 10,
    marginTop: 30,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  spaceBetweenLogoAndButtons: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fonts.size.l,
    color: colors.black,
    fontFamily: fonts.style.jetBrainsMono,
  },
  buttonsView: {
    flex: 0.3,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Welcome;
