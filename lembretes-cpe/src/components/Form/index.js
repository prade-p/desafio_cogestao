import React from 'react';
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native'
import styles from './style'


export default function Form() {

    /* const [nome, setNome] = useState();
    const [email, setEmail] = useState();

    function Cadastro() {

    } */

    return(
        <View style={styles.formContainer}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Nome Completo</Text>
                <TextInput style={styles.textInput}
               /*  onChangeText={setNome}
                value={nome} */
                placeholder="Digite seu nome"
                />
                <Text style={styles.formLabel}>E-MAIL</Text>
                <TextInput style={styles.textInput}
               /*  onChangeText={setEmail}
                value={email} */
                placeholder="Digite seu endereço de e-mail"
                />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonCancelar}>
                    <Text style={styles.textCancelar}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonConfirmar}>
                    <Text style={styles.textConfirmar}>Confirmar</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View>
               
            </View>
        </View>
    );
}