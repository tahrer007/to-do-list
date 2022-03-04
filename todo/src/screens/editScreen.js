import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ route, navigation }) => {
  const id = route.params.id;
  const { data, editBlogPost } = useContext(BlogContext);
  const blogPost = data.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      intialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(post) => {
        editBlogPost({ id, title: post.title, content: post.content }, () =>
          navigation.goBack()
        );
      }}
    />
  );
};
const styles = StyleSheet.create({});

export default EditScreen;
