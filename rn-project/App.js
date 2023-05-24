import React from "react";
import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import Home from "./Screens/auth/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        {/* Замена Switch */}
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        {/* Замена Route */}
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

// export default function App() {
//   return <RegistrationScreen />;
// }
