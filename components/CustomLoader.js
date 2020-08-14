import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Colors from "../constants/colors";

// CustomLoader Component
const CustomLoader = () => {
  return (
    <View style={styles.CustomLoaderStyle}>
      <ActivityIndicator
        size="large"
        animating={true}
        color={Colors.ButtonColor}
      />
      <Text style={styles.LoadingTextStyle}>Loading...</Text>
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
  LoadingTextStyle: {
    textAlign: "center",
    marginVertical: 5,
    color: Colors.BodyLightColor,
  },
});
