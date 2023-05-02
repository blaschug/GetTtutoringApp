import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthHeader from '../components/AuthHeader';
import AuthButton from '../components/AuthButton';

function Welcome({navigation}: any) {
  const onPressLogin = () => {
    navigation.navigate('Login');
  };

  const onPressRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.body}>
      <AuthHeader />
      <View style={styles.spaceBetweenLogoAndButtons}>
        <Text style={styles.text}>
          {/* Ver que hacer aca */}
          Le meto info de algo aca?
        </Text>
      </View>
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
    fontSize: 20,
    color: 'black',
    fontFamily: 'JetBrainsMono-Regular',
  },
  buttonsView: {
    flex: 0.3,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Welcome;
