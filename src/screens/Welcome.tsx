import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AuthHeader from '../components/AuthHeader';

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
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={onPressRegister}>
          <View>
            <Text style={styles.buttonText}>Register</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={onPressLogin}>
          <View>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
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
  button: {
    width: '75%',
    backgroundColor: '#190152',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Welcome;
