import React, {Suspense, useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useRecoilValue} from 'recoil';
import {Path} from '../constants/navigation/navigation';
import {RootStackParamList} from '../models/screens';
import {StackScreenProps} from '@react-navigation/stack';
import {colors} from '../constants/styles/styles';
import {ProfileAtom} from '../atoms/profile';
import {getCurrentUser} from '../services/authService';

type HomeProps = StackScreenProps<RootStackParamList, Path.Home>;

//TODO: Suspense example
function ProfileTitle() {
  const profile = useRecoilValue(ProfileAtom);

  return <Text>{profile.title}</Text>;
}

function Home({navigation}: HomeProps) {
  const user = getCurrentUser();

  useEffect(() => {
    if (user) {
      navigation.navigate(Path.Home);
    }
  });

  const onPressRemoveToken = () => {
    auth().signOut();
    navigation.navigate(Path.Welcome);
  };

  return (
    <View style={styles.body}>
      <Suspense
        fallback={
          <Text
            style={{
              color: colors.red,
              textAlign: 'center',
              alignContent: 'center',
            }}>
            loading...
          </Text>
        }>
        <ProfileTitle />
      </Suspense>
      <Text style={styles.text}>{user?.email}</Text>
      <Text style={styles.text}>{user?.providerId}</Text>
      <Text style={styles.text}>{user?.metadata.creationTime}</Text>
      <Button title="signOut" onPress={onPressRemoveToken} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    color: colors.black,
  },
});

export default Home;
