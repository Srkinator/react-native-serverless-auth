import React, {
  useEffect
} from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';

import { firebaseConfig } from './config'
import SignUpForm from './components/SignUpForm';


export default function App() {

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, [])

  return (
    <View style={styles.container}>
      <SignUpForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
