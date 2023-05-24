import { createStackNavigator } from "@react-navigation/stack";

import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { HomeScreen } from "./HomeScreen";
import { CommentsScreen } from "./CommentsScreen";
import { MapScreen } from "./MapScreen";

const NestedScreen = createStackNavigator();

export function PostsScreen({ navigation, route }) {
  console.log("PostsScreen", route);
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerBackTitle: false,
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10, marginBottom: 10 }}
              activeOpacity={0.7}
              onPress={() => navigation.popToTop()}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
}
