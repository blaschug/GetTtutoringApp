import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {colors, radius} from '../constants/styles/styles';

interface AuthInputProps {
  placeholder: string;
  value?: string;
  isSecured?: boolean;
  onChangeText: (text: string) => void;
}

function AuthInput(props: AuthInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextInput
      secureTextEntry={props.isSecured}
      placeholder={props.placeholder}
      placeholderTextColor={colors.grayCommon}
      style={[
        {borderColor: isFocused ? colors.black : colors.grayBackground},
        styles.input,
      ]}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      value={props.value}
      onChangeText={value => {
        props.onChangeText(value);
      }}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    width: '75%',
    backgroundColor: colors.white,
    color: colors.black,
    borderWidth: 1,
    borderRadius: radius.common,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default AuthInput;
