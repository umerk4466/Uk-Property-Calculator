import React from "react";
import { TextInput } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import globalStyle from "../constants/styles";
import Colors from "../constants/colors";

// CustomNumberInput Component
const CustomNumberInput = props => {
  return (
    <View>
      <Text numberOfLines={1}>{props.title}</Text>
      <TextInput
        multiline={true}
        numberOfLine={1}
        blurOnSubmit={true}
        style={[styles.Input, globalStyle.LargeFont]}
        textAlign={"center"}
        placeholder={props.placeholder}
        keyboardType={"decimal-pad"}
        value={props.value}
        onBlur={props.onBlur}
        onChangeText={props.onChangeText}
        {...props}
      />
      {props.error && props.touched ? (
        <Text style={styles.InputTextError}>{props.error}</Text>
      ) : null}
    </View>
  );
};

export default CustomNumberInput;

// CustomNumberInput Component Style
const styles = StyleSheet.create({
  Input: {
    flex: 1,
    padding: 1,
    marginTop: 3,
    marginBottom: 4,
    borderWidth: 0.6,
    borderRadius: 4,
    borderColor: Colors.BoxContainerBorderColor
  },
  InputTextError: {
    color: Colors.ErrorColor,
    fontSize: 12,
    marginBottom: 5
  }
});
