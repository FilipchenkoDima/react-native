import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export const HomeScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState(null);
  const isAvatarAdd = false;

  const { email, login, password } = route.params;

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
      // console.log(route.key);
    }
  }, [route.params]);

  const onLikes = () => {
    setLikes((prevState) => prevState + 1);
  };

  const sendInfoToComments = () => {
    navigation.navigate("Comments", route);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View>
          <Image
            style={styles.avatarPhoto}
            source={require("../../assets/images/rectangle.png")}
          />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{login !== "" ? login : "example"}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 32 }}>
            {console.log(item.photo)}
            <Image source={{ uri: item.photo }} style={styles.photo} />
            <Text>{item.photoTitle}</Text>
            <View style={styles.infoWrap}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{ ...styles.comments, marginRight: 24 }}
                  onPress={() => {
                    navigation.navigate("Comments"), sendInfoToComments();
                  }}
                >
                  <Feather
                    name="message-circle"
                    size={24}
                    color={"#BDBDBD"}
                    style={{ transform: [{ scaleX: -1 }] }}
                  />

                  <Text
                    style={{
                      ...styles.commentsCount,
                      color: "#212121",
                    }}
                  >
                    0
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.comments} onPress={onLikes}>
                  <Feather
                    name="thumbs-up"
                    size={24}
                    color={likes ? "#FF6C00" : "#BDBDBD"}
                  />

                  <Text
                    style={{
                      ...styles.commentsCount,
                      color: likes ? "#212121" : "#BDBDBD",
                    }}
                  >
                    {likes ? likes : 0}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.place}
                onPress={() => navigation.navigate("Map")}
              >
                <Feather name="map-pin" size={24} color="#BDBDBD" />
                <Text style={styles.placeName}>{item.place}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
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
  profile: {
    justifyContent: "flex-start",
    flexDirection: "row",
    marginBottom: 32,
  },
  avatarPhoto: {
    height: 60,
    width: 60,
    borderRadius: 16,
  },
  profileInfo: {
    marginTop: 16,
    marginLeft: 8,
  },
  name: {
    color: "#212121",
    fontSize: 13,
    lineHeight: 15,
  },
  email: {
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  photo: {
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  infoWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  comments: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  commentsCount: {
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 9,
  },
  place: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  placeName: {
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 9,
    textDecorationLine: "underline",
  },
});
