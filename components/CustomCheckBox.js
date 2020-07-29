import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

// CustomCheckBox Component
const CustomCheckBox = (props) => {
  return (
    <View style={styles.CustomCheckBoxStyle}>
      <CheckBox
        title={props.title1}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={props.checked1 == true ? true : false}
        onPress={props.onPress1}
      />
      <CheckBox
        title={props.title2}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={props.checked1 == true ? false : true}
        onPress={props.onPress2}
      />
    </View>
  );
};

export default CustomCheckBox;
// CustomCheckBox Component Style
const styles = StyleSheet.create({
  CustomCheckBoxStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
});
