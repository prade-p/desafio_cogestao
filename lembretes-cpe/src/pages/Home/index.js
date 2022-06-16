import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Lembrete from "../../components/Lembrete/";
import styles from "./style";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.titleHome}>
        <Text style={styles.textTitle}>Ola Usuário</Text>
      </View>
      <View style={styles.subtitleHome}>
        <Text>Aqui estão os seus lembretes registrados:</Text>
      </View>
      <Lembrete/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonAdicionar}>
          <Text>Adicionar Lembrete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
