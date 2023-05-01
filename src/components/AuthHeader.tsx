import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function AuthHeader() {
  return (
    <View style={styles.body}>
      <Image
        resizeMode="center"
        style={styles.logo}
        source={require('./../../assets/logo.png')}
      />
      <Text style={styles.titleText}>Get Tutoring</Text>
    </View>
  );
}

//TODO: Review flex styles later
const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.6,
  },
  logo: {
    flex: 1,
  },
  titleText: {
    fontSize: 40,
    color: 'black',
    fontFamily: 'JetBrainsMono-Regular',
    marginBottom: 30,
  },
});

export default AuthHeader;
