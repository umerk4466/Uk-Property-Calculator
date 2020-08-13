import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import Colors from "../constants/colors";

// CustomLoader Component
const CustomLoader = () => {
  return (
    <View style={styles.CustomLoaderStyle}>
      <ActivityIndicator size="large" animating={true} />
    </View>
  );
};

export default CustomLoader;
// CustomLoader Component Style
const styles = StyleSheet.create({
  CustomLoaderStyle: {
    flex: 1,
    justifyContent: "center",
  },
});
