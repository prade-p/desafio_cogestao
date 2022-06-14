import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 
import Cadastro from "./src/pages/Cadastro/";
import Home from "./src/pages/Home/";
import Login from "./src/pages/Login/";
import Perfil from "./src/pages/Perfil/";
 
const Stack = createNativeStackNavigator();
 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Lembrete" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;