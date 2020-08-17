import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "./colors";

// component for modal header.
const CustomModalHeaderButton = (navigation) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="close"
            iconStyle={{ padding: 12 }}
            color={Colors.OnButtonColor}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
};

export default CustomModalHeaderButton;
