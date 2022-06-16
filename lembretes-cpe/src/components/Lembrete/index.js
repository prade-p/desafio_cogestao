import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Lembrete() {
  return (
    <View style={styles.lembreteContainer}>
      <View style={styles.textLembrete}>
        <Text style={styles.tituloLembrete}>Molhar as Plantas</Text>
        <Text style={styles.conteudoLembrete}>Molhar as plantas da casa nas Segundas</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonExcluir}>
          <Text style={styles.textExcluir}>Excluir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonEditar}>
          <Text style={styles.textEditar}>Editar Conteúdo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
