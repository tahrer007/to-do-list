import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);
  return (
    <BlogPostForm
      onSubmit={(post) => {
        addBlogPost(post, () => navigation.goBack());
      }}
    />
  );
};

export default CreateScreen;
