import React from "react";
// import status bar to add color
import { StatusBar } from "react-native";
import Colors from "./constants/colors";
// import custom stack navigator
import CustomStackNavigator from "./navigation/CustomStackNavigator";
// set the status bar color
StatusBar.setBackgroundColor(Colors.StatusBarColor);
StatusBar.setBarStyle("light-content", true);

export default function App() {
  return <CustomStackNavigator />;
}
