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
import { useDispatch } from "react-redux";
import { authSignOutUser } from "../../redux/auth/authOperations";

const NestedScreen = createStackNavigator();

export default function PostsScreen() {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(authSignOutUser());
    console.log("Sign out succesful");
  };
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
              onPress={signOut}
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
