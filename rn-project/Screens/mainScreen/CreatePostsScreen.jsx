import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";

export const CreatePostsScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [snap, setSnap] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [inFocus, setInFocus] = useState(false);
  const [photoTitle, setPhotoTitle] = useState("");
  const [place, setPlace] = useState("");
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      // setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const takePhoto = async () => {
    const photo = await snap.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    // console.log(location);
    setPhoto(photo.uri);
    setLocation(location.coords);
    checkingInputs();
  };
  const checkingInputs = () => {
    if (photo && location && photoTitle && place) {
      setChecking(true);
    }
  };

  const sendPhoto = () => {
    // if (checking) {
    navigation.navigate("HomeScreen", {
      photo,
      location,
      photoTitle,
      place,
    });
    resetData();
    // } else {
    //   alert("не все поля заполнены");
    // }
  };

  const resetData = () => {
    setPhoto(null);
    setLocation(null);
    setPhotoTitle("");
    setPlace("");
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    setInFocus(false);
    Keyboard.dismiss();
  };
  const trackingFocus = () => {
    setIsShowKeyboard(true);
    setInFocus(true);
  };
  const handleChangeTitle = (value) => {
    setPhotoTitle(value);
    checkingInputs();
    return;
  };
  const handleChangePlace = (value) => {
    setPlace(value);
    checkingInputs();
    return;
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <>
          {photo ? (
            <View style={styles.wrap}>
              <Image source={{ uri: photo }} style={styles.camera} />
            </View>
          ) : (
            <View style={styles.wrap}>
              <Camera style={styles.camera} ref={setSnap}>
                <TouchableOpacity style={styles.cameraBtn} onPress={takePhoto}>
                  <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              </Camera>
            </View>
          )}
          <TouchableOpacity
            style={{ marginTop: 8, marginBottom: 48 }}
            activeOpacity={0.7}
          >
            <Text style={styles.text}>"Загрузить фото"</Text>
          </TouchableOpacity>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="Название"
              value={photoTitle}
              style={styles.input}
              onFocus={trackingFocus}
              onChangeText={handleChangeTitle}
            />
          </View>
          <View
            style={{
              ...styles.inputWrap,
              position: "relative",
              marginBottom: 50,
            }}
          >
            <TextInput
              placeholder="Местность"
              value={place}
              style={{
                ...styles.input,
                paddingLeft: 28,
              }}
              onFocus={trackingFocus}
              onChangeText={handleChangePlace}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ ...styles.iconWrap, marginRight: 8 }}
            >
              <Feather name="map-pin" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            // disabled={checking}
            onPress={sendPhoto}
            activeOpacity={0.7}
            style={{
              ...styles.buttonSubmit,
              backgroundColor: checking ? "#FF6C00" : "#F6F6F6",
            }}
          >
            <Text
              style={{
                ...styles.buttonText,
                color: checking ? "#FFFFFF" : "#BDBDBD",
              }}
            >
              Опубликовать
            </Text>
          </TouchableOpacity>
        </>
        <TouchableOpacity style={styles.buttonDelete} onPress={resetData}>
          <Feather name="trash-2" size={24} color="#DADADA" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 32,
    justifyContent: "space-between",
  },
  photo: {
    flex: 1,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  wrap: {
    height: 240,
  },
  camera: {
    flex: 1,
    height: 240,
    width: "100%",
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
  // camera2: {
  //   flex: 1,
  //   height: 50,
  //   width: 50,
  //   backgroundColor: "#F6F6F6",
  //   // justifyContent: "center",
  //   // alignItems: "center",
  // },
  cameraBtn: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
  },
  inputWrap: {
    marginBottom: 32,
  },

  input: {
    paddingBottom: 15,
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
  },
  iconWrap: {
    position: "absolute",
    bottom: 16,
  },
  buttonDelete: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 85,
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    // padding: 10,
  },
  buttonSubmit: {
    borderRadius: 100,
    paddingVertical: 16,
    // marginBottom: 32,
  },
});
