import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Deliveroo 2.0" component={HomeScreen}/>
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
