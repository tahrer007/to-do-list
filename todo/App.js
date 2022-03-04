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
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: ` blog post # ${state.length + 1}`,
        },
      ];

    case "delete_blogPost":
      return state.filter((blogPost) => blogPost.id !== action.payLoad);

    default:
      return state;
  }
};

const app = () => {
  const [BlogPosts, dispatch] = useReducer(blogReducer, []);
  const addBlogPost = () => {
    dispatch({ type: "add_blogPost" });
  };
  const deleteBlogPost = (id) => {
    console.log(id);
    dispatch({ type: "delete_blogPost", payLoad: id });
  };

  return (
    <BlogContext.Provider
      value={{ data: BlogPosts, addBlogPost, deleteBlogPost }}
    >
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
