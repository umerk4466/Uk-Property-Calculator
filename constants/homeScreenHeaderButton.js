import React from "react";
import { Icon } from "react-native-elements";
import Colors from "../constants/colors";

// function for showing right button on the header.
const homeScreenHeaderButton = (navigation) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          name="menu"
          iconStyle={{ paddingHorizontal: 12 }}
          color={Colors.OnButtonColor}
          onPress={() => navigation.navigate("Menu")}
        />
      ),
    });
  });
};

export default homeScreenHeaderButton;
