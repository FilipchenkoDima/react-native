import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = () => {
  return (
    <View>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          longitude: 7.1883741,
          latitude: 51.6157734,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ longitude: 7.1883741, latitude: 51.6157734 }} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
