import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Btn from './components/button/button'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Click on buttons below to test for permissions</Text>
      <Btn />
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
