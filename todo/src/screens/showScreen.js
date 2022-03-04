import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";

const ShowScreen = ({ route }) => {
  const { data, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  const blogPostId = route.params.id;
  const blogPost = data.find((blogPost) => blogPost.id === blogPostId);

  return (
    <View style={styles.container}>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ShowScreen;
