import React from "react";
// import input-field for money
import { TextInputMask } from "react-native-masked-text";
import { View, Text, StyleSheet } from "react-native";
import globalStyle from "../constants/styles";
import Colors from "../constants/colors";

// CustomSingleRowMoneyInput Component
const CustomSingleRowMoneyInput = props => {
  return (
    <View>
      <View style={styles.RowInputStyle}>
        <Text numberOfLines={1} style={styles.InputTextStyle}>
          {props.title}
        </Text>
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
          placeholder={props.placeholder}
          keyboardType={"decimal-pad"}
          value={props.value}
          onBlur={props.onBlur}
          includeRawValueInChangeText={true}
          onChangeText={props.onChangeText}
          {...props}
        />
      </View>
      {props.error && props.touched ? (
        <Text style={styles.InputTextError}>{props.error}</Text>
      ) : null}
    </View>
  );
};

export default CustomSingleRowMoneyInput;

// CustomSingleRowMoneyInput Component Style
const styles = StyleSheet.create({
  InputTextStyle: { width: "55%" },
  Input: {
    flex: 1,
    marginTop: 3,
    marginBottom: 4,
    borderWidth: 0.6,
    borderRadius: 4,
    borderColor: Colors.BoxContainerBorderColor,
    marginLeft: 10,
    width: "45%"
  },
  InputTextError: {
    color: Colors.ErrorColor,
    fontSize: 12,
    marginBottom: 5
  },
  RowInputStyle: {
    flexDirection: "row",
    alignItems: "center"
  }
});
