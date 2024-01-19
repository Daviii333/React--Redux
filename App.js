import React, { useState } from "react";
import 'react-native-gesture-handler';
import { StyleSheet, View } from "react-native";
import { Text, Input, Button} from "react-native-elements"
import  Icon  from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import login from "./screens/login";
import Principal from "./screens/Principal";
import Cadastro from "./screens/Cadastro";

//app


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name ="login" component={login} />
      <Stack.Screen name = "Principal" component={Principal} />
      <Stack.Screen name = "Cadastro" component={Cadastro}/>
      <Stack.Screen name = "Cadastrarsse" component={Principal}/>
    </Stack.Navigator>

  );
}


export default function App(){
  return(




    <NavigationContainer>
      <MyStack />
    </NavigationContainer>)}
    