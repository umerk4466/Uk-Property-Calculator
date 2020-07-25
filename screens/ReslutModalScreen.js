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
// import components
import RootComponent from "../components/RootComponent";
import HeadingText from "../components/HeadingText";
import BoxWrapper from "../components/BoxWrapper";

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
      <BoxWrapper>
        {/* <View>{fieldItems}</View> */}
        <HeadingText paddingTopNone heading="Summary" />
        <View style={styles.row}>
          <Text style={styles.fieldValueStyle}>Ttitle of the thing</Text>
          <Text style={styles.fieldValueStyle}>£100000</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fieldValueStyle}>Ttitle of the thing</Text>
          <Text style={styles.fieldValueStyle}>£100000</Text>
        </View>
      </BoxWrapper>

      <BoxWrapper>
        {/* <View>{fieldItems}</View> */}
        <HeadingText paddingTopNone heading="Summary" />
        <View style={styles.row}>
          <Text style={styles.fieldValueStyle}>Ttitle of the thing</Text>
          <Text style={styles.fieldValueStyle}>£100000</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fieldValueStyle}>Ttitle of the thing</Text>
          <Text style={styles.fieldValueStyle}>£100000</Text>
        </View>
      </BoxWrapper>
    </RootComponent>
  );
};

export default ReslutModalScreen;

// ReslutModalScreen Component Style
const styles = StyleSheet.create({
  row: {
    color: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 30,
  },
  fieldValueStyle: {
    color: Colors.BodyLightColor,
  },
});
