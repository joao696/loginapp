import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
      <Stack.Screen 
        name="RegisterScreen" 
        component={HomeScreen} 
        options={{
            title: "Home",
        }}/>
        
        <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen}
        options={{
            title: "Login",
        }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
