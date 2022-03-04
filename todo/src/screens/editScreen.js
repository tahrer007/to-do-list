import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ route }) => {
  const id = route.params.id;
  const { data } = useContext(BlogContext);
  const blogPost = data.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      intialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(post) => {
        addBlogPost(post, () => navigation.goBack());
      }}
    />
  );
};
const styles = StyleSheet.create({});

export default EditScreen;
