import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from '../../components/Title/'
import InputCadastro from '../../components/InputCadastro/'


export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Title/>
      <InputCadastro/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:70,
  },
});
