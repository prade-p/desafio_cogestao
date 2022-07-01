import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import Title from "../../components/Title/";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  
  const [email, setEmail] = useState("")
  
  function loginUsuario() {
    api.post('/login', {email})
    
    .then ((res) => {
      navigation.navigate('Home')  
      AsyncStorage.setItem("@LembratesCPE:Token", res.data.token)
      .then(() => {
        alert("Logado com sucesso!")
      })
      .catch((error) => { alert(`Falha ao registrar token: ${error.message} `)})
    })
    .catch((error) => {
      alert(`Falha ao logar: ${error.message} `);
    })
  }
  
  
  return (
    <View style={styles.container}>
      <Title />
      <Text style={styles.formLabel}>E-MAIL</Text>
      <View style={styles.form}>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          style={styles.textInput}
          placeholder="Digite seu endereço de e-mail"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={loginUsuario} style={styles.buttonEntrar}>
          <Text>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
