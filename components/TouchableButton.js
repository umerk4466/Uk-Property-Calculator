import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/colors";

// TouchableButton Component
const TouchableButton = ({ onPress, imgSource, title, description }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.ButtonContainerStyle}>
        <View style={styles.ImgBox}>
          <Image source={imgSource} style={styles.ImageIconStyle} />
        </View>
        <View style={styles.TextBox}>
          <Text numberOfLines={1}>{title}</Text>
          <Text numberOfLines={1} style={{ color: Colors.BodyLightColor }}>
            {description}
          </Text>
        </View>
      </View>
      <View style={styles.BottomLine}></View>
    </TouchableOpacity>
  );
};

export default TouchableButton;

// TouchableButton Component Style
const styles = StyleSheet.create({
  ButtonContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    height: 85,
    padding: 10
  },
  ImageIconStyle: {
    height: 45,
    width: 45
  },
  ImgBox: {
    width: 65,
    alignItems: "center"
  },
  TextBox: {
    flex: 1,
    marginLeft: 10
  },
  BottomLine: {
    flex: 1,
    marginLeft: 85,
    backgroundColor: Colors.BoxContainerBorderColor,
    height: 0.5
  }
});
