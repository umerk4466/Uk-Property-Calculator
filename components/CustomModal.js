import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button
} from "react-native";

import globalStyle from "../constants/styles";
import Colors from "../constants/colors";

// CustomModal Component
const CustomModal = props => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      isVisible={props.isVisible}
      backdropColor={"white"}
      style={{ margin: 0 }}
      onModalHide={() => {}}
    >
      <View>
        <Text>{props.textValue}</Text>
        <Text>{props.message}</Text>
      </View>
      <TouchableHighlight
        style={{ backgroundColor: "#2196F3" }}
        onPress={props.closeModel}
      >
        <Text>Hide Modal</Text>
      </TouchableHighlight>
    </Modal>
  );
};

export default CustomModal;
