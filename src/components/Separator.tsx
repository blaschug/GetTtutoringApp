import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../constants/styles/styles';

interface SeparatorProps {
  message: string;
}

function Separator(props: SeparatorProps) {
  return (
    <View style={styles.separator}>
      <View style={styles.separatorLine} />
      <Text style={styles.separatorText}>{props.message}</Text>
      <View style={styles.separatorLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separatorText: {
    color: colors.black,
    marginHorizontal: 20,
    fontSize: fonts.size.m,
    opacity: 0.6,
  },
  separatorLine: {
    height: 1,
    flex: 0.35,
    backgroundColor: colors.black,
    opacity: 0.2,
  },
});

export default Separator;
