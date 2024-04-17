import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useState } from "react";

export default function RegisterScreen({ navigation }) {

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [repetirSenha, setRepetirSenha] = useState();
  const [logradouro, setLogradouro] = useState();
  const [cep, setCep] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();


  // Nome, Email, Senha, Repetir Senha
  // Endereço: Logradouro, CEP, Cidade, Estado
  // LOGRADOURO é um termo que designa um terreno ou um espaço anexo a uma habitação, usado para serventia da casa, ou ainda qualquer espaço público comum que pode ser usufruído por toda a população e reconhecido pela administração de um município, como largos, praças, ruas, jardins, parques, entre outros.
  return (
    <View>
      <Text>Faça seu Registro</Text>

      <TextInput 
      placeholder="Digite seu nome" 
      onChangeText={setNome}
      value = {nome}
      />

    <TextInput 
      placeholder="Digite seu e-mail" 
      onChangeText={setEmail}
      value = {email}
      />


    <TextInput 
      placeholder="Digite seu senha" 
      onChangeText={setSenha}
      value = {senha}
      />

<TextInput 
      placeholder="Confirme sua senha" 
      onChangeText={setRepetirSenha}
      value = {repetirSenha}
      />


<TextInput 
      placeholder="Digite seu logradouro" 
      onChangeText={setLogradouro}
      value = {logradouro}
      />

<TextInput 
      placeholder="Digite seu CEP" 
      onChangeText={setCep}
      value = {cep}
      />

<TextInput 
      placeholder="Digite sua cidade" 
      onChangeText={setCidade}
      value = {cidade}
      />

<TextInput 
      placeholder="Digite seu Estado" 
      onChangeText={setEstado}
      value = {estado}
      />


<Button onPress={() => navigation.navigate("LoginScreen")}>
        Voltar ao login
      </Button>

    </View>
  );
}
