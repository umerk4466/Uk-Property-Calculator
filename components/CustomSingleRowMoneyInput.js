import React from "react";
// import input-field for money
import { TextInputMask } from "react-native-masked-text";
import { View, Text, StyleSheet } from "react-native";
import globalStyle from "../constants/styles";
import Colors from "../constants/colors";
import { Alert } from "react-native";
import { Icon } from "react-native-elements";

// CustomSingleRowMoneyInput Component
const CustomSingleRowMoneyInput = (props) => {
  return (
    <View>
      <View style={styles.RowInputStyle}>
        {props.helpText ? (
          <View style={styles.InputHelpTextStyle}>
            <Text numberOfLines={1} style={{ width: "80%" }}>
              {props.title}
            </Text>
            <Icon
              name="info"
              iconStyle={{ marginHorizontal: 5 }}
              color={Colors.BodyLightColor}
              size={20}
              onPress={() => Alert.alert("Info", props.helpText)}
            />
          </View>
        ) : (
          <Text numberOfLines={1} style={styles.InputTextStyle}>
            {props.title}
          </Text>
        )}
        <TextInputMask
          multiline={true}
          numberOfLine={1}
          blurOnSubmit={true}
          type={"money"}
          options={{
            precision: props.percentageField ? 1 : 0,
            separator: ".",
            delimiter: ",",
            unit: props.percentageField ? "" : "£",
            suffixUnit: props.percentageField ? "%" : "",
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
  InputHelpTextStyle: {
    width: "55%",
    flexDirection: "row",
    alignItems: "center",
  },
  InputTextStyle: { width: "55%" },
  Input: {
    flex: 1,
    marginTop: 3,
    marginBottom: 4,
    borderWidth: 0.6,
    borderRadius: 4,
    borderColor: Colors.BoxContainerBorderColor,
    marginLeft: 10,
    width: "45%",
  },
  InputTextError: {
    color: Colors.ErrorColor,
    fontSize: 12,
    marginBottom: 5,
  },
  RowInputStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
});
