import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BrekingImage = {
  uri: "https://images.pexels.com/photos/20700715/pexels-photo-20700715/free-photo-of-people-are-walking-through-an-archway-in-front-of-a-pyramid.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};
const BreakingCard = ({ title, body, image }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("SingleBlog")}>
        <View style={styles.container}>
          <Image
            source={{ uri: image }}
            style={{ width: 200, height: 120, borderRadius: 20 }}
          />
          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 16 }}>
            {title}
          </Text>
          <Text style={{ fontSize: 14, marginTop: 8, color: "#cdcdcd" }}>
            3 hours ago
          </Text>
          <Text style={{ fontSize: 14, marginTop: 4, color: "#cdcdcd" }}>
            By Anthony David
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 200,
    marginRight: 20,
  },
});

export default BreakingCard;
