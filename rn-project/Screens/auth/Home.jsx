import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

import { PostsScreen } from "../mainScreen/PostsScreen";
import { CreatePostsScreen } from "../mainScreen/CreatePostsScreen";
import { ProfileScreen } from "../mainScreen/ProfileScreen";

const MainTab = createBottomTabNavigator();

export default function Home({ navigation, route: { params } }) {
  return (
    <MainTab.Navigator
      initialRouteName="PostsScreen"
      options={{ params }}
      screenOptions={{
        // tabBarShowLabel: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffffff",
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveTintColor: "#212121CC",
        tabBarStyle: {
          paddingTop: 10,
          paddingHorizontal: 50,
          paddingBottom: 50,
        },
      }}
    >
      <MainTab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <TouchableOpacity>
              <Feather name="grid" size={size} color={color} />
            </TouchableOpacity>
          ),

          tabBarItemStyle: {
            marginLeft: 15,
            marginRight: 15,
            width: 70,
            height: 40,
            borderRadius: 50,
          },
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Feather name="arrow-left" size={24} color="#212121CC" />
            </TouchableOpacity>
          ),
          title: "Create post",
          tabBarIcon: ({ focused, size, color }) => (
            <TouchableOpacity>
              <Feather name="plus" size={size} color={color} />
            </TouchableOpacity>
          ),
          tabBarItemStyle: {
            marginRight: 15,
            width: 70,
            height: 40,
            borderRadius: 50,
          },
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <TouchableOpacity>
              <Feather name="user" size={size} color={color} />
            </TouchableOpacity>
          ),

          tabBarItemStyle: {
            marginRight: 15,
            width: 70,
            height: 40,
            borderRadius: 50,
          },
        }}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
