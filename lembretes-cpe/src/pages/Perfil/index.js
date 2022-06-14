import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function Lembrete() {
  return (
    <View style={styles.container}>
      <Text> Lembrete</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:120,
  },
});

