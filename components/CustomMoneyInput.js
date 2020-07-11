import React from "react";
// import input-field for money
import { TextInputMask } from "react-native-masked-text";
import { View, Text, StyleSheet } from "react-native";
import globalStyle from "../constants/styles";
import Colors from "../constants/colors";

// CustomMoneyInput Component
const CustomMoneyInput = ({
  title,
  placeholder,
  onBlur,
  value,
  onChangeText,
  error,
  touched
}) => {
  return (
    <View>
      <Text numberOfLines={1}>{title}</Text>
      <TextInputMask
        multiline={true}
        numberOfLine={1}
        blurOnSubmit={true}
        type={"money"}
        options={{
          precision: 0,
          separator: ".",
          delimiter: ",",
          unit: "£",
          suffixUnit: ""
        }}
        style={[styles.Input, globalStyle.LargeFont]}
        textAlign={"center"}
        placeholder={placeholder}
        keyboardType={"decimal-pad"}
        value={value}
        onBlur={onBlur}
        includeRawValueInChangeText={true}
        onChangeText={onChangeText}
      />
      {error && touched ? (
        <Text style={styles.InputTextError}>{error}</Text>
      ) : null}
    </View>
  );
};

export default CustomMoneyInput;

// CustomMoneyInput Component Style
const styles = StyleSheet.create({
  Input: {
    flex: 1,
    padding: 1,
    marginTop: 5,
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
