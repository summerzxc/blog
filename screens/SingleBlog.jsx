import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import the icon component

const SingleBlog = () => {
  const navigation = useNavigation();
  return (
    <ScrollView  style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 60, left: 20, zIndex: 1 }}
        >
          <Icon name="arrow-back" size={36} color="white" />
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/12726025/pexels-photo-12726025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={{ width: "100%", height: 460 }}
        />
        <View style={styles.topContent}>
          <View
            style={{
              width: 65,
              borderRadius: 100,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              padding: 10,
            }}
          >
            <Text style={styles.textBackground}>Travel</Text>
          </View>
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            The Most Beautiful Place in the World
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.Content}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.userInfo}>
              <Image
                style={styles.userImage}
                source={{
                  uri: "https://images.pexels.com/photos/12726025/pexels-photo-12726025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
              />
              <Text style={styles.userName}>Michael.B</Text>
            </View>
            <TouchableOpacity style={styles.eyeIconContainer}>
              <Icon name="visibility" size={18} color="black" />
              <Text>481</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%" }}>
            <Text style={{ lineHeight: 32, fontSize: 16 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  topContainer: {
    position: "relative",
    width: "100%",
  },
  bottomContainer: {
    position: "absolute",
    width: "100%",
    top: 430,
  },
  Content: {
    padding: 30,
    borderRadius: 30,
    backgroundColor: "white",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  userName: {
    color: "black",
    fontWeight: "bold",
  },
  eyeIconContainer: {
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    display: "flex",
    gap: 10,
  },
  topContent: {
    position: "absolute",
    bottom: 30,
    padding: 30,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  textBackground: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});

export default SingleBlog;
