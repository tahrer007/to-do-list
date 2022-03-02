import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import IndexScreen from "./src/screens/indexScreen";
import { BlogContext } from "./src/context/BlogContext";

const Stack = createStackNavigator();

const app = () => {
  const [BlogPosts, setBlogPost] = useState([]);
  const addBlogPost = () => {
    setBlogPost([
      ...BlogPosts,
      { title: `blog post  ${BlogPosts.length + 1}` },
    ]);
  };

  return (
    <BlogContext.Provider value={{ data: BlogPosts, addBlogPost: addBlogPost }}>
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
