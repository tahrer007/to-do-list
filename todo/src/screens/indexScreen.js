import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { BlogContext } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { data, addBlogPost, deleteBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <Text>index screen</Text>
      <Button
        title="create post "
        onPress={() => navigation.navigate("create")}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <FontAwesome
                    style={styles.icon}
                    name="trash"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "grey",
  },
  icon: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
  },
});
export default IndexScreen;
