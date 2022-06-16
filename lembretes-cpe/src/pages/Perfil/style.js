import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: 70px;
  align-items: center;
`;
export const TitleContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 40px;
  line-height: 48px;
`;
export const InputContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #ffe600;
  width: 90%;
  padding: 5%;
  border: 2px solid #000000;
  border-radius: 4px;
  margin-top: 45px;
`;
export const Input = styled.TextInput`
  background-color: #ffffff;
  border: 1px;
  width: 100%;
  padding: 1%;
  margin-bottom: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const Button = styled.TouchableOpacity`
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    width: 40%;
    background-color: ${(props)=>props.backgroundColor};
    padding-top: 14px;
    padding-bottom: 14px;
    margin: 20px;
    margin-top: 30px;
`;
export const Cancelar = styled.Text`
    color: #fff;
`