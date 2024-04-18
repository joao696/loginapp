import { useState } from "react";
import { View, Image} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function realizaLogin() {
    console.log("Fazer Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>

        <Text
          variant="headlineMedium"
          style={{
            textAlign: "center",
            marginBottom: 20,
          }}
        >
           <Image
        source={require("../../assets/usuario.png")}
        style={{ width: 200, height: 200, justifyContent: "flex-start", alignItems: "flex-start", }}
      >Faça seu login</Image>
     
          Faça seu Login
        </Text>
        <TextInput
          placeholder="Digite seu e-mail"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
        />
        <TextInput
          placeholder="Digite sua senha"
          onChangeText={setSenha}
          value={senha}
          secureTextEntry // faz com que o campo seja senha com *
          style={styles.input}
        />
        <View>
          <Button onPress={realizaLogin} mode="contained">
            Fazer Login
          </Button>
        </View>
        <Button onPress={() => navigation.navigate("RegisterScreen")}>
          Faça seu cadastro
        </Button>
      </View>
    </View>
  );
}
