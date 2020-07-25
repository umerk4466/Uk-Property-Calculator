import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button,
} from "react-native";

import globalStyle from "../constants/styles";
import Colors from "../constants/colors";

const ReslutModalScreen = ({ route, navigation }) => {
  const { modalFields } = route.params;
  const fieldItems = modalFields.map((field) => (
    <Text key={field.fieldTitle}>
      {field.fieldTitle}
      {field.fieldValue}
    </Text>
  ));
  return (
    <View>
      <View>{fieldItems}</View>

      <Text>Hellooo model{route.params.hello}</Text>
    </View>
  );
};

export default ReslutModalScreen;
