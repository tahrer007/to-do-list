
import "react-native-gesture-handler";
import { react } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Search restaurant " }}
        />
        
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;
