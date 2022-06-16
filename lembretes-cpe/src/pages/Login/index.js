import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import Title from "../../components/Title/";

export default function Login() {
  
  const [email, setEmail] = useState("")
  
  
  
  
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
        <TouchableOpacity onPress={() => alert(email)} style={styles.buttonEntrar}>
          <Text>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
