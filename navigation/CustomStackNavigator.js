import React from "react";
// import stack Navigator
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import custom theme for navigator
import { CustomTheme } from "../constants/navigation-theme";
// import screens to add in stack
import HomeScreen from "../screens/HomeScreen";
import RoiScreen from "../screens/RoiScreen";

const Stack = createStackNavigator();

export default function CustomStackNavigator() {
  return (
    <NavigationContainer theme={CustomTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Roi Screen" component={RoiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
