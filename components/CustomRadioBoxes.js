import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

// CustomRadioBoxes Component
const CustomRadioBoxes = (props) => {
  return (
    <View style={styles.CustomRadioBoxesStyle}>
      <CheckBox
        containerStyle={styles.checkeBoxStyle}
        title={props.firstTitle}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={props.selectFirst == true ? true : false}
        onPress={props.onFirstPress}
      />
      <CheckBox
        containerStyle={styles.checkeBoxStyle}
        title={props.secondTitle}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={props.selectFirst == true ? false : true}
        onPress={props.onSecondPress}
      />
    </View>
  );
};

export default CustomRadioBoxes;
// CustomRadioBoxes Component Style
const styles = StyleSheet.create({
  CustomRadioBoxesStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: 10,
    backgroundColor: "red",
    overflow: "hidden",
  },
  checkeBoxStyle: { overflow: "hidden" },
});
