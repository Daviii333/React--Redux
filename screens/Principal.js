import * as React from 'react';
import { Text, View,Image,H1 } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Reducer } from '@reduxjs/toolkit';




const Cadastrarse = () => {
  navigation.navigate("Principal");
}



 function Feed() {
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Text>Feed!</Text>
      <Text> Seja Bem Vindo!!! </Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  ); 
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function Carrinho() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Carrinho</Text>
      <Text>Seja Bem Vindo!!!</Text>
    </View>
  );
}




//fffffffffffffff


const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarActiveBackgroundColor:'#0D1117',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
            
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size, font}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
            
      <Tab.Screen
       name="Carrinho"
       component={Carrinho}
       options={{
        tabBarLabel: 'Carrinho',
        tabBarIcon: ({ color, size, font}) => (
    <MaterialCommunityIcons name="cart-plus" color={color} size={size} />
  ),
}}
/>


    </Tab.Navigator>
  );}
  