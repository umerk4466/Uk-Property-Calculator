import React from "react";
// import input-field for money
import { TextInputMask } from "react-native-masked-text";
import { View, Text, StyleSheet } from "react-native";
import globalStyle from "../constants/styles";
import Colors from "../constants/colors";

// CustomMoneyInput Component
const CustomMoneyInput = (props) => {
  return (
    <View>
      <Text numberOfLines={1}>{props.title}</Text>
      <TextInputMask
        multiline={true}
        numberOfLine={1}
        blurOnSubmit={true}
        type={"money"}
        options={{
          precision: props.percentageField ? 1 : 0,
          separator: ".",
          delimiter: ",",
          unit: props.percentageField ? "" : props.numberField ? "" : "£",
          suffixUnit: props.percentageField ? "%" : props.numberField ? "" : "",
        }}
        style={[styles.Input, globalStyle.LargeFont]}
        textAlign={"center"}
        placeholder={props.placeholder}
        keyboardType={"decimal-pad"}
        value={props.value}
        onBlur={props.onBlur}
        includeRawValueInChangeText={true}
        onChangeText={props.onChangeText}
        {...props}
      />
      {props.error && props.touched ? (
        <Text style={styles.InputTextError}>{props.error}</Text>
      ) : null}
    </View>
  );
};

export default CustomMoneyInput;

// CustomMoneyInput Component Style
const styles = StyleSheet.create({
  Input: {
    flex: 1,
    marginTop: 3,
    marginBottom: 4,
    borderWidth: 0.6,
    borderRadius: 4,
    borderColor: Colors.BoxContainerBorderColor,
  },
  InputTextError: {
    color: Colors.ErrorColor,
    fontSize: 12,
    marginBottom: 5,
  },
});
