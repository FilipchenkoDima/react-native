import { View, Text, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";

export const CommentsScreen = ({ route, navigation }) => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   if (route.params) {
  //     setPosts((prevState) => [...prevState, route.params]);
  //   }
  // }, [route.params]);
  let { params } = route.params;

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 32 }}>
        <Image source={{ uri: params.photo }} style={styles.photo} />
        {console.log(params.photo)}
        <Text>{params.photoTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  photo: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
});
