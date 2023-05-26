import React from "react";

import { View, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();
const MainStack = createBottomTabNavigator();

import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";

import PostsScreen from "./Screens/mainScreen/PostsScreen";
import CreatePostsScreen from "./Screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";

export const onRoute = (isLogedIn) => {
  if (!isLogedIn) {
    return (
      <View style={styles.container}>
        <AuthStack.Navigator initialRouteName="Login">
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
        </AuthStack.Navigator>
      </View>
    );
  }
  return (
    <>
      <MainStack.Navigator tabBarOptions={{ showLabel: false }}>
        <MainStack.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons name="grid-outline" size={size} color="#212121" />
            ),
          }}
          name="PostsScreen"
          component={PostsScreen}
        ></MainStack.Screen>
        <MainStack.Screen
          options={{
            headerShown: true,
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons name="ios-add-circle" size={36} color="#212121" />
            ),
          }}
          name="Create"
          component={CreatePostsScreen}
        ></MainStack.Screen>
        <MainStack.Screen
          options={{
            headerShown: true,
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons name="person-outline" size={size} color="#212121" />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        ></MainStack.Screen>
      </MainStack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
