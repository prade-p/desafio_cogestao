import React from "react";
import { Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/MaterialIcons";

import Cadastro from "./src/pages/Cadastro/";
import Home from "./src/pages/Home/";
import Login from "./src/pages/Login/";
import Perfil from "./src/pages/Perfil/";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Header() {
  return (
    <Image
      style={{ width: 100, height: 100 }}
      source={require("./src/images/logo14.png")}
    />
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: (props) => <Header {...props} />,
        tabBarStyle: {
          backgroundColor: "black",
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopColor: "transparent",
        },
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: "#FFE600",
        
      }}
    >
      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false, 
          tabBarLabel: "Cadastro",
          tabBarIcon: ({color}) => (
            <Icon name="assignment-ind" color={color} size={26}/>
          )
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#FFE600",
          },
          tabBarLabel: "Home",
          tabBarIcon: ({color}) => (
            <Icon name="home" color={color} size={26}/>
          )
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ 
          headerShown: false, 
          tabBarLabel: "Login",
          tabBarIcon: ({color}) => (
            <Icon name="login" color={color} size={26}/>
          )
        }}
      />
      
    </Tab.Navigator>
  );
}

function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Rotas"
          options={{ headerShown: false }}
          component={Tabs}
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

export default Rotas;
