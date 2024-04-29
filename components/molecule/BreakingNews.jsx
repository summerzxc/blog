import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import BreakingCard from "../atom/BreakingCard";
import data from "../../data/blog.json"

const BreakingNews = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Breaking News</Text>
        <TouchableOpacity>
          <Text>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.cardContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <BreakingCard key={item.id} title={item.title} body={item.body} image={item.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    paddingLeft: 30,
    marginRight: 30,
  }
});

export default BreakingNews;
