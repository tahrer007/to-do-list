import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
//import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  //const value = useContext(BlogContext);
  return (
    <View style={styles.container}>
      <Text>index screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default IndexScreen;
