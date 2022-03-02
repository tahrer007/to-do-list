import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import IndexScreen from "./src/screens/indexScreen";
import { BlogContext } from "./src/context/BlogContext";

const Stack = createStackNavigator();

const app = () => {
  return (
    <BlogContext.Provider value={50}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="index">
          <Stack.Screen
            name="index"
            component={IndexScreen}
            options={{ title: "to-do app " }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogContext.Provider>
  );
};
export default app;
