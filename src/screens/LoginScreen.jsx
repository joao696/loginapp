import { View } from "react-native";
import {  Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";



export default function LoginScreen(navigation) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  function realizaLogin(){
    console.log("Fazer Login");
  }


  return (
    <View>
      <Text>Faça seu Login</Text>

      <TextInput 
      placeholder="Digite seu e-mail" 
      onChangeText={setEmail}
      value = {email}
      />

    <TextInput 
      placeholder="Digite sua senha" 
      onChangeText={setPassword}
      value = {password}
      secureTextEntry = ""
      />

      <Button onPress = {realizaLogin}></Button>
      <Button onPress = {() => navigation.navigate("RegisterScreen")}>Faça seu cadastro</Button>

    </View>
  );
}
