import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import SmallCard from "../atom/SmallCard";
import data from "../../data/blog.json";

const SmallNews = () => {
  return (
    <View style={styles.container} vertical={true}>
      {data.map((item) => (
        <SmallCard
          key={item.id}
          title={item.title}
          body={item.body}
          image={item.image}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 40,
  },
});

export default SmallNews;
