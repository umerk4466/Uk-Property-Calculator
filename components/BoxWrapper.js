import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

// BoxWrapper Component
const BoxWrapper = props => {
  return <View style={styles.BoxWrapperStyle}>{props.children}</View>;
};

export default BoxWrapper;
// BoxWrapper Component Style
const styles = StyleSheet.create({
  BoxWrapperStyle: {
    padding: 10,
    backgroundColor: Colors.BoxContainerColor,
    borderWidth: 0.3,
    borderColor: Colors.BoxContainerBorderColor,
    borderRadius: 4
  }
});
