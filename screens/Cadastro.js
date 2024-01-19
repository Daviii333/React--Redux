import React, { useState } from "react";
import { StyleSheet, View} from "react-native";
import { Text, Input, Button, CheckBox} from "react-native-elements"
import  Icon  from 'react-native-vector-icons/FontAwesome';
import styles from "../style/Mainstyle";
import { createStackNavigator } from "@react-navigation/stack";


export default function Cadastro ({navigation}){

const [isSelected, setSelected] = useState(false)
const [email, setEmail] = useState (null)
const [nome, setNome] = useState (null)
const [telefone, setTelefone] = useState (null)
const [senha, setSenha] = useState (null)

const [ErrorEmail, setErrorEmail] = useState (null)
const [ErrorNome, setErrorNome] = useState (null)
const [ErrorTelefone, setErrorTelefone] = useState (null)  
const [ErrorSenha, setErrorSenha] = useState (null)



const Cadastrasse = () => {
  navigation.navigate("Principal");
}



    return (
      <View style={styles.container}>
        <Text h2> Cadastre-Se</Text>
        <Input
        placeholder="E-mail"
        leftIcon={{type:'font-awesome', name:'envelope'  }}
        onChangeText={value => setEmail(value)}
        errorMessage={ErrorEmail}
        />

        <Input
        placeholder="Nome"
        leftIcon={{type:'font-awesome', name:'user'  }}
        onChangeText={value => setNome(value)}
        KeyboarType="email-address" 
        errorMessage={ErrorNome}
        />

        <Input
        placeholder="Telefone"
        leftIcon={{type:'font-awesome', name:'phone'  }}
        onChangeText={value => setTelefone(value)}
        keyboardType="phone-pad" 
        errorMessage={ErrorTelefone}
        />


        <Input
        placeholder="Senha"
        leftIcon={{type:'font-awesome', name:'lock'  }}
        onChangeText={value => setSenha(value)}
        secureTextEntry={true}
        />

        
        <CheckBox
            title="Eu aceito os termos de uso"    
            checkedIcon="check"
            uncheckedIcon="square-o"
            checkedColor="green"
            uncheckedColor="red"
            checked = {isSelected}
            onPress={() => setSelected(! isSelected)}


        />

      <Button
        icon={
          <Icon
            name="check"
            size={17}
            color='white'
            
          
          />
        }
        title="Cadastrar"
        buttonStyle={specificStyle.button}
        onPress={() => Cadastrasse()}
        />
    
       </View>
    ); 
    }
  
      const specificStyle = StyleSheet.create({
        specificConteiner:{
          backgroundColor:'#fff',
          alignItems:"center",
          justifyContent:'center'

        },
        button:{
    
          marginTop:15,
          alignContent:'center',
          justifyContent:"center",
          width:250,
        
          
          

        }
      })
  


