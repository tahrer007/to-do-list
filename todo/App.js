import "react-native-gesture-handler";
import React, { useReducer } from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import IndexScreen from "./src/screens/indexScreen";
import { BlogContext } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/showScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payLoad.title,
          content: action.payLoad.content,
        },
      ];

    case "delete_blogPost":
      return state.filter((blogPost) => blogPost.id !== action.payLoad);

    case "add_blogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payLoad.title,
          content: action.payLoad.content,
        },
      ];

    default:
      return state;
  }
};

const app = () => {
  const [BlogPosts, dispatch] = useReducer(blogReducer, []);
  const addBlogPost = (post, callBack) => {
    dispatch({ type: "add_blogPost", payLoad: post });
    callBack();
  };
  const editBlogPost = (post, callBack) => {
    dispatch({ type: "edit_blogPost", payLoad: post });
    callBack;
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
            options={({ navigation }) => ({
              title: "to-do app ",
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("create")}>
                  <FontAwesome name="plus" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="create"
            component={CreateScreen}
            options={{ title: "create post" }}
          />
          <Stack.Screen
            name="edit"
            component={EditScreen}
            options={{ title: "edit post" }}
          />
          <Stack.Screen
            name="show"
            component={ShowScreen}
            options={({ navigation, route }) => ({
              title: "details",
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("edit", { id: route.params.id })
                  }
                >
                  <FontAwesome name="edit" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogContext.Provider>
  );
};
export default app;
