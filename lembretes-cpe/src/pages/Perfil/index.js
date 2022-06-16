import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Container, TitleContainer, Title, InputContainer, Input, Buttons, Button, Cancelar } from "./style";

export default function Lembrete() {
  return (
    <Container>
      <TitleContainer>
        <Title>Cadastrar Lembrete</Title>
      </TitleContainer>
      <InputContainer>
        <Input placeholder="    Adicione um Título" />
        <Input placeholder="    Adicione uma Descrição" />
      </InputContainer>
      <Buttons>
        <Button backgroundColor="#FF0000">
          <Cancelar>Cancelar</Cancelar>
        </Button>
        <Button backgroundColor="#FFE600">
          <Text>Confirmar</Text>
        </Button>
      </Buttons>
    </Container>
  );
}
