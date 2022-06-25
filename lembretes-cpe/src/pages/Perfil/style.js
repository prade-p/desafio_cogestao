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
  padding-top: 5%;
  padding-bottom: 11%;
  border: 2px solid #000000;
  border-radius: 4px;
  margin-top: 45px;
`;
export const Input = styled.TextInput`
  font-size: 14px;
  margin-left: 6%;
  margin-top: 3%;
  color: #717070;
  width: 90%;
`;
export const TitleInput = styled.View`
  display: flex;
  width: 80%;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 4px;
  margin-bottom: 5%;
`;
export const TextInput = styled.View`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 4px;
  flex-direction: column;
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
  background-color: ${(props) => props.backgroundColor};
  padding-top: 14px;
  padding-bottom: 14px;
  margin: 20px;
  margin-top: 30px;
`;
export const Cancelar = styled.Text`
  color: #fff;
`;
