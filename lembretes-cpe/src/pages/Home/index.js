import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Lembrete from "../../components/Lembrete/";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home({ navigation }) {

  
  console.log(AsyncStorage.getItem("@LembratesCPE:Token"))


  return (
    <View style={styles.container}>
      <View style={styles.titleHome}>
        <Text style={styles.textTitle}>Ola </Text>
      </View>
      <View style={styles.subtitleHome}>
        <Text>Aqui estão os seus lembretes registrados:</Text>
      </View>
      <Lembrete/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonAdicionar} onPress={ () => navigation.navigate('Lembrete')}>
          <Text>Adicionar Lembrete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
