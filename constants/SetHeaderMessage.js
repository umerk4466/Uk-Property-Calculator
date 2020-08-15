import React from "react";
import { Alert } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../constants/colors";

// function for showing right button on the header.
const SetHeaderMessage = (navigation, message) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="info"
          iconStyle={{ paddingRight: 12 }}
          color={Colors.OnButtonColor}
          onPress={() => Alert.alert("Info", message)}
        />
      ),
    });
  }, [navigation]);
};

export default SetHeaderMessage;
