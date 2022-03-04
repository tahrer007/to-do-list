import "react-native-gesture-handler";
import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import IndexScreen from "./src/screens/indexScreen";
import { BlogContext } from "./src/context/BlogContext";

const Stack = createStackNavigator();
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [...state, { title: ` blog post # ${state.length + 1}` }];

    default:
      return state;
  }
};

const app = () => {
  const [BlogPosts, dispatch] = useReducer(blogReducer, []);
  const addBlogPost = () => {
    dispatch({ type: "add_blogPost" });
  };

  return (
    <BlogContext.Provider value={{ data: BlogPosts, addBlogPost }}>
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
