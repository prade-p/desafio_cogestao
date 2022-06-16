import React from "react";
import { Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "./src/pages/Cadastro/";
import Home from "./src/pages/Home/";
import Login from "./src/pages/Login/";
import Perfil from "./src/pages/Perfil/";

const Stack = createNativeStackNavigator();

function Header() {
  return (
      <Image
        style={{ width: 100, height: 100 }}
        source={require("./src/images/logo14.png")}
      />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Lembrete"
        screenOptions={{ headerTitle: (props) => <Header {...props} /> }}
      >
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: "#FFE600",
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Lembrete"
          component={Perfil}
          options={{
            headerStyle: {
              backgroundColor: "#FFE600",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
