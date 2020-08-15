import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../constants/colors";

// function for showing right button on the header.
const homeScreenHeaderButton = (navigation) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Icon
            name="menu"
            iconStyle={{ padding: 12 }}
            color={Colors.OnButtonColor}
          />
        </TouchableOpacity>
      ),
    });
  });
};

export default homeScreenHeaderButton;
