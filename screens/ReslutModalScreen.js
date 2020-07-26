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
  const { fieldsBlock } = route.params;
  console.log(fieldsBlock);
  // Iterate the fieldsBlock array
  // const fieldItems = fieldsBlock.map(
  //   (fieldBlock) => (
  //     <View>
  //       <Text>{fieldBlock.title}</Text>
  //       {/* {fieldBlock.fields.map((field) => (
  //         <Text>{field.fieldTitle}</Text>
  //       ))} */}
  //       )
  //     </View>
  //   )

  const fieldItems = fieldsBlock.map((field) => (
    <View key={field.title}>
      <BoxWrapper>
        <HeadingText paddingTopNone heading={field.title} />
        {field.fields.map((f) => (
          <View key={f.fieldTitle} style={styles.row}>
            <Text style={styles.fieldStyle}>{f.fieldTitle}</Text>
            <Text style={styles.fieldStyle}>{f.fieldValue}</Text>
          </View>
        ))}
      </BoxWrapper>
      <View style={{ margin: 5 }}></View>
    </View>
  ));
  return (
    <RootComponent>
      {fieldItems}
      {/* <BoxWrapper>
        <HeadingText paddingTopNone heading="Summary" />
        <View style={styles.row}>
          <Text style={styles.fieldValueStyle}>Ttitle of the thing</Text>
          <Text style={styles.fieldValueStyle}>£100000</Text>
        </View>
      </BoxWrapper> */}
      {/* 
      <BoxWrapper>
        <HeadingText paddingTopNone heading="Montyly Mortgages" />
        <View style={styles.row}>
          <Text style={styles.fieldValueStyle}>Ttitle of the thing</Text>
          <Text style={styles.fieldValueStyle}>£100000</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fieldValueStyle}>Ttitle of the thing</Text>
          <Text style={styles.fieldValueStyle}>£100000</Text>
        </View>
      </BoxWrapper> */}
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
  fieldStyle: {
    color: Colors.BodyLightColor,
  },
});
