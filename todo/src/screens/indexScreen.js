import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { BlogContext } from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  console.log(data);

  return (
    <View style={styles.container}>
      <Text>index screen</Text>
      <Button title="click me !! " onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default IndexScreen;
