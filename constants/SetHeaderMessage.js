import React from "react";
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../constants/colors";

// function for showing right button on the header.
const SetHeaderMessage = (navigation, message) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => Alert.alert("Info", message)}>
          <Icon
            name="info"
            iconStyle={{ padding: 12 }}
            color={Colors.OnButtonColor}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
};

export default SetHeaderMessage;
