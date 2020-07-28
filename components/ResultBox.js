import React from "react";
import { View, Text, StyleSheet } from "react-native";
import globalStyle from "../constants/styles";
import Colors from "../constants/colors";

// ResultBox Component
const ResultBox = (props) => {
  return (
    <View style={styles.ResultsViewContainer}>
      <Text numberOfLines={1} style={globalStyle.LargeFont}>
        {props.title}
      </Text>
      <Text style={globalStyle.LargeFont}>
        {props.result} {props.sign}
      </Text>
    </View>
  );
};

export default ResultBox;
// ResultBox Component Style
const styles = StyleSheet.create({
  ResultsViewContainer: {
    backgroundColor: Colors.BoxContainerColor,
    minHeight: 110,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.3,
    borderColor: Colors.BoxContainerBorderColor,
    borderRadius: 4,
  },
});
