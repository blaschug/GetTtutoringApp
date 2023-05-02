import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
    backgroundColor: '#190152',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default AuthButton;
