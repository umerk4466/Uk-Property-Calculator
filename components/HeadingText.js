import React from "react";
import { Text, StyleSheet } from "react-native";
import globalStyle from "../constants/styles";
import Colors from "../constants/colors";

// HeadingText Component
const HeadingText = props => {
  return (
    <Text
      adjustsFontSizeToFit={true}
      numberOfLines={1}
      style={[
        { paddingTop: props.paddingTopNone ? 0 : 10 },
        styles.HeadingTextStyle,
        globalStyle.LargeFont
      ]}
    >
      {props.heading}
    </Text>
  );
};

export default HeadingText;
// HeadingText Component Style
const styles = StyleSheet.create({
  HeadingTextStyle: {
    color: Colors.HeadingTextColor,
    paddingBottom: 10
  }
});
