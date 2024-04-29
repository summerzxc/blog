import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HeroImage = {
  uri: "https://images.pexels.com/photos/12726025/pexels-photo-12726025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const HomeHero = () => {
  return (
    <View style={styles.container}>
      <Image source={HeroImage} style={styles.image} />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <View
          style={{
            width: 131,
            borderRadius: 100,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            padding: 10,
          }}
        >
          <Text style={styles.textBackground}>News of the day</Text>
        </View>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", marginTop: 20 }}>
          How Meaningful Is Prediabetes for Older Adults?
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Learn More</Text>
          <MaterialIcons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: 400,
    width: "100%",
    position: "relative",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    opacity: 0.3,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  content: {
    padding: 35,
  },
  textBackground: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 20,
    width: 117,
  },
  buttonText: {
    color: "white",
    marginRight: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeHero;
