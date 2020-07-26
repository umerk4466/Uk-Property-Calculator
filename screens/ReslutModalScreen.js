import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import components
import RootComponent from "../components/RootComponent";
import HeadingText from "../components/HeadingText";
import BoxWrapper from "../components/BoxWrapper";
import Colors from "../constants/colors";

const ReslutModalScreen = ({ route, navigation }) => {
  // Get the param(all fields and container) //
  const { fieldsBlockContainer } = route.params;
  // Iterate fields blocks
  const fieldsBlocks = fieldsBlockContainer.map((fieldsBlock) => (
    <View key={fieldsBlock.title}>
      <BoxWrapper>
        <HeadingText paddingTopNone heading={fieldsBlock.title} />
        {fieldsBlock.fields.map((fields) => (
          <View key={fields.fieldTitle} style={styles.row}>
            <Text style={styles.fieldStyle}>{fields.fieldTitle}</Text>
            <Text style={styles.fieldStyle}>{fields.fieldValue}</Text>
          </View>
        ))}
      </BoxWrapper>
      <View style={{ marginVertical: 5 }}></View>
    </View>
  ));
  return <RootComponent>{fieldsBlocks}</RootComponent>;
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
  fieldStyle: {
    color: Colors.BodyLightColor,
  },
});
