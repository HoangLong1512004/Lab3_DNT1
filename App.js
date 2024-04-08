import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Lab31 from './layout/Lab31';
import Lab33 from './layout/Lab33';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Lab31/> */}
      <Lab33/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
