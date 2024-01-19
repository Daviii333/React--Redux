import React, { useState } from "react";
import { StyleSheet, View} from "react-native";
import { Text, Input, Button, CheckBox} from "react-native-elements"
import  Icon  from 'react-native-vector-icons/FontAwesome';
import styles from "../style/Mainstyle";
import { createStackNavigator } from "@react-navigation/stack";



export default function login ({navigation}){




  const entrar = () => {
    navigation.navigate("Principal")
  }

  const Cadastrar = () => {
    navigation.navigate("Cadastro");
  }
  
    return (
      <View style={styles.container}>
        <Text h1> ENTRE NO APP </Text>
        <Input
        placeholder="E-mail"
        leftIcon={{type:'font-awesome', name:'envelope'  }}
        KeyboarType="email-address" 
        />
        
      <Input
        placeholder="Senha"
        leftIcon={{type:'font-awesome', name:'lock'}}
        KeyboarType="email-address" 
        secureTextEntry={true}/>
        


      <Button
        icon={
          <Icon
            name="check"
            size={17}
            color='white'
          
          />
        }
        title="ENTRAR"
        buttonStyle={specificStyle.button}
        onPress={() => entrar()}
        />
        
        <Button
        icon={
          <Icon
            name="user"
            size={17}
            color='white'
            
          
          />
        }
        title="CADASTRO"
        buttonStyle={specificStyle.button}
        onPress={() => Cadastrar()} 
        />
    
       </View>
    ); 
    }
  
      const specificStyle = StyleSheet.create({
        specificConteiner:{
          backgroundColor:'#fff',
          alignItems:"center",
          justifyContent:'center',
      
        },
        button:{
    
          marginTop:17,
          alignContent:'center',
          justifyContent:"center",
          alignItems:'center',
          height:50,
          width:370,
          padding:5
    
        }
      })
  