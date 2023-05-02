import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, radius} from '../constants/styles/styles';

interface AuthButtonProps {
  message: string;
  onPress: () => void;
}

function AuthButton(props: AuthButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.registerButton}
      onPress={props.onPress}>
      <View>
        <Text style={styles.registerButtonText}>{props.message}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  registerButton: {
    width: '75%',
    backgroundColor: colors.intenseBlue,
    borderRadius: radius.common,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: colors.white,
    fontSize: fonts.size.l,
  },
});

export default AuthButton;
