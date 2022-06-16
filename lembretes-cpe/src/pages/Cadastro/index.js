import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Title from '../../components/Title/'
import styles from "../Cadastro/style";



export default function Cadastro() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")

  async function handleSubmit() {
    try { 
      const usuario = await store
    } catch (error) {
      
    }
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
          <TouchableOpacity style={styles.buttonCancelar}>
            <Text style={styles.textCancelar}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert(`${nome} ${email}`)} style={styles.buttonConfirmar}>
            <Text style={styles.textConfirmar}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </View>
    </View>
  );
}
