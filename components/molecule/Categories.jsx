import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Category from "../atom/Category";
import data from "../../data/category.json";
const Categories = () => {
  return (
    <View>
      <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <Category key={item.id} category={item.category} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
});

export default Categories;
