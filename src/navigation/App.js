import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Home Screen</Text>
  </View>
);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: "Home"
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default AppNavigator;
