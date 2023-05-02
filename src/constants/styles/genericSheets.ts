import {StyleSheet} from 'react-native';
import {colors} from './styles';

export const authStyles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.grayBackground,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 5,
  },
  formView: {
    width: '100%',
    alignItems: 'center',
  },
  socialButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  socialButton: {
    marginHorizontal: 15,
  },
  socialImage: {
    height: 70,
    width: 70,
  },
});
