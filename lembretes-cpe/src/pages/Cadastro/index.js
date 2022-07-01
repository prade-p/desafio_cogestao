import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Title from '../../components/Title/';
import api from '../../services/api';
import styles from "../Cadastro/style";



export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")

  function registrarCadastro() {
    
    const usuario = {
      nome,
      email
    }

    api.post('/usuarios', usuario)
    .then (() => {
      alert("Cadastrado com sucesso!");
      navigation.navigate('Login')  
      
    })
    .catch((error) => {
      alert(`Falha ao cadastrar: ${error.message} `);
    })

  }
  
  return (
    <View style={styles.container}>
      <Title/>
      <View style={styles.formContainer}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Nome Completo</Text>
        <TextInput
          onChangeText={(value) => setNome(value)}
          style={styles.textInput}
          placeholder="Digite seu nome"
        />
        <Text style={styles.formLabel}>E-MAIL</Text>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          style={styles.textInput}
          placeholder="Digite seu endereço de e-mail"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={ () => navigation.navigate('Login')} style={styles.buttonCancelar}>
            <Text style={styles.textCancelar}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={registrarCadastro} style={styles.buttonConfirmar}>
            <Text style={styles.textConfirmar}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </View>
    </View>
  );
}
