import React from "react";
import { Button, Alert } from "react-native";
import { Icon } from "react-native-elements";

// function for showing right button on the header.
const SetHeaderMessage = (navigation, message) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="sc-telegram"
          type="evilicon"
          color="#517fa4"
          onPress={() => Alert.alert("Info", message)}
        />
      )
    });
  }, [navigation]);
};

export default SetHeaderMessage;
