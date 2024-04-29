import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const SmallCard = ({ title, body, image }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={{ width: 80, height: 80, borderRadius: 10 }} />
      <View style={{ display: "flex", flexDirection: "column" }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 4 }}>{title}</Text>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: 240 }}>
            <Text style={{ fontSize: 14, color: "#888888" }}>2 hours ago</Text>
            <Text style={{ fontSize: 14, color: "#888888" }}>339 views</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 14,
  },
});

export default SmallCard;
