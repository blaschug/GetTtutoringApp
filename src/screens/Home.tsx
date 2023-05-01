import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';

function Home() {
  const [idToken, setIdToken] = useState('');
  const user = auth().currentUser;

  useEffect(() => {
    const getTokenId = async () => await user?.getIdToken();
    getTokenId().then(resp => {
      if (resp) {
        setIdToken(resp);
      }
      console.log(resp);
    });
  }, [user]);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{user?.email}</Text>
      <Text style={styles.text}>{idToken}</Text>
      <Text style={styles.text}>{user?.providerId}</Text>
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
    color: 'black',
  },
});

export default Home;
