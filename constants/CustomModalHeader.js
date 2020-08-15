import React from "react";
import { Alert } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../constants/colors";

// component for modal header.
const CustomModalHeader = (navigation) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      gestureDirection: "horizontal-inverted",
      headerLeft: () => (
        <Icon
          name="info"
          iconStyle={{ paddingRight: 12 }}
          color={Colors.OnButtonColor}
          onPress={() => Alert.alert("Info")}
        />
      ),
    });
  }, [navigation]);
};

export default CustomModalHeader;
