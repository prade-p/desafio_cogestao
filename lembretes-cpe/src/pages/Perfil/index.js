import React, { useState } from 'react';
import { Text } from "react-native";
import { Container, TitleContainer, Title, InputContainer, Input, Buttons, Button, Cancelar, TitleInput, TextInput } from "./style";


export default function Lembrete({ navigation }) {

  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")


  return (
    <Container>
      <TitleContainer>
        <Title>Cadastrar Lembrete</Title>
      </TitleContainer>
      <InputContainer>
        <TitleInput>
        <Input multiline={true} placeholder="Adicione um Título" onChangeText={(value) => setTitulo(value)}/>
        </TitleInput>
        <TextInput>
        <Input multiline={true} placeholder="Adicione uma Descrição" onChangeText={(value) => setDescricao(value)}/>
        </TextInput>
      </InputContainer>
      <Buttons>
        <Button onPress={ () => navigation.navigate('Home')} backgroundColor="#FF0000">
          <Cancelar>Cancelar</Cancelar>
        </Button>
        <Button backgroundColor="#FFE600" onPress={() => alert(`${titulo} ${descricao}`)}>
          <Text>Confirmar</Text>
        </Button>
      </Buttons>
    </Container>

  );
}
