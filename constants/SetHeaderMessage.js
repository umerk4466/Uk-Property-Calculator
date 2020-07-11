import React from "react";
import { Button } from "react-native";

// function for showing right button on the header.
const SetHeaderMessage = (navigation, message) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="sj" onPress={() => alert(message)} />
    });
  }, [navigation]);
};

export default SetHeaderMessage;
