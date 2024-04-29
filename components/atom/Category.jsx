import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Category = ({ category }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    borderColor: "#cdcdcd",
    borderWidth: 1,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Category;
