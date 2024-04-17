import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View>
      <Text>Bem vindo</Text>
      <Button onPress={() => {
        navigation.navigate("LoginScreen");
      }}
      >
        Logout</Button>
    </View>
  );
}
