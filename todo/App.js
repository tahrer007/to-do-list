import "react-native-gesture-handler";
import { react } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import IndexScreen from "./src/screens/indexScreen";
import { BlogProvider } from "./src/context/BlogContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen
          name="index"
          component={IndexScreen}
          options={{ title: "to-do app " }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
