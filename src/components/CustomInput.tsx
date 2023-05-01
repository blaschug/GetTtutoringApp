import React, {useState} from 'react';
import {StyleProp, StyleSheet, TextInput, TextStyle} from 'react-native';

interface CustomInputProps {
  placeholder: string;
  style?: StyleProp<TextStyle>;
  isSecured?: boolean;
}

function CustomInput(props: CustomInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

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
      style={[
        {borderColor: isFocused ? '#000000' : '#F6F6F6'},
        props.style == null ? styles.input : props.style,
      ]}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      value={inputValue}
      onChangeText={value => {
        setInputValue(value);
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

export default CustomInput;
