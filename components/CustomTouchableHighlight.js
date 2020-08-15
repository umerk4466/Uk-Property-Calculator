import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../constants/colors";

// CustomTouchableHighlight Component
const CustomTouchableHighlight = ({ onPress, iconName, title }) => {
  return (
    <TouchableHighlight
      style={{ marginBottom: 10, borderRadius: 4 }}
      underlayColor={Colors.BoxContainerBorderColor}
      onPress={onPress}
    >
      <View style={styles.TouchButtonStyles}>
        <Icon
          name={iconName}
          iconStyle={{ padding: 12 }}
          color={Colors.BodyLightColor}
          iconStyle={styles.CustomIconStyle}
        />
        <Text>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default CustomTouchableHighlight;

// CustomTouchableHighlight Component Style
const styles = StyleSheet.create({
  TouchButtonStyles: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  CustomIconStyle: {
    marginRight: 25,
  },
});
