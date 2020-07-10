import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import globalStyle from "../constants/styles";

// CalculateResetButton Component
const CalculateResetButton = props => {
  return (
    <View style={styles.ButtonsViewContainer}>
      {/* Calculate Button */}
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={props.onPressCalculateBtn}
      >
        <Text style={[styles.BtnTextStyle, globalStyle.LargeFont]}>
          {props.calculateBtnTittle}
        </Text>
      </TouchableOpacity>

      {/* middel text "or" */}
      <Text style={styles.TextStyle}> or </Text>

      {/* Reset Button */}
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={props.onPressResetBtn}
      >
        <Text style={[styles.BtnTextStyle, globalStyle.LargeFont]}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CalculateResetButton;

// CalculateResetButton Component Style
const styles = StyleSheet.create({
  ButtonsViewContainer: {
    paddingVertical: 15
  },
  ButtonStyle: {
    backgroundColor: Colors.ButtonColor,
    height: 42,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  BtnTextStyle: {
    color: Colors.OnButtonColor
  },
  TextStyle: {
    textAlign: "center",
    color: Colors.BodyLightColor,
    padding: 2
  }
});
