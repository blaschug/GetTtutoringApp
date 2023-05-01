import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface CustomInputProps {
  placeholder: string;
  value?: string;
  isSecured?: boolean;
  onChangeText: (text: string) => void;
}

function AuthInput(props: CustomInputProps) {
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
      placeholderTextColor={'gray'}
      style={[{borderColor: isFocused ? '#000000' : '#F6F6F6'}, styles.input]}
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
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default AuthInput;
