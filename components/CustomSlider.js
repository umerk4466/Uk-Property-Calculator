import React from "react";
import { Slider } from "react-native-elements";
import { Text, View } from "react-native";
import Colors from "../constants/colors";

// CustomSlider Component
const CustomSlider = (props) => {
  return (
    <View>
      <Text style={{ marginTop: 5 }} numberOfLines={1}>
        {props.title} :{" "}
        {props.floatValue ? props.value.toFixed(1) : props.value} {props.suffix}
      </Text>
      <Slider
        maximumTrackTintColor={Colors.BoxContainerBorderColor}
        minimumTrackTintColor={Colors.PrimaryColor}
        thumbTintColor={Colors.ButtonColor}
        minimumValue={props.start}
        maximumValue={props.end}
        value={props.value}
        onValueChange={props.onValueChange}
        {...props}
      />
    </View>
  );
};

export default CustomSlider;
