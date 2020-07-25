import React from "react";
// import components
import RootComponent from "../components/RootComponent";

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
  // Get the param(fields data) //
  const { modalFields } = route.params;
  // Iterate the modalFields array
  const fieldItems = modalFields.map((field) => (
    <Text key={field.fieldTitle}>
      {field.fieldTitle}
      {field.fieldValue}
    </Text>
  ));
  return (
    <RootComponent>
      <View>{fieldItems}</View>

      <Text>Hellooo model{route.params.hello}</Text>
    </RootComponent>
  );
};

export default ReslutModalScreen;
