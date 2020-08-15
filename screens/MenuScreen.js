import React from "react";
import { InteractionManager, View, Text } from "react-native";
// import components
import RootComponent from "../components/RootComponent";
import CustomLoader from "../components/CustomLoader";
import HeadingText from "../components/HeadingText";
import CustomTouchableHighlight from "../components/CustomTouchableHighlight";

// import custom functions
import CustomModalHeader from "../constants/CustomModalHeader";

const MenuScreen = ({ navigation }) => {
  // set header like modals
  CustomModalHeader(navigation);
  // state for loader gif
  const [isLoading, setIsLoading] = React.useState(true);
  InteractionManager.runAfterInteractions(() => setIsLoading(false));
  // return component
  if (isLoading) {
    return <CustomLoader />;
  } else {
    return (
      <RootComponent>
        <CustomTouchableHighlight
          title={"Feedback/ Suggestions"}
          iconName={"comment"}
          onPress={() => alert("aka")}
        />
        <CustomTouchableHighlight
          title={"Rate Us"}
          iconName={"star"}
          onPress={() => alert("aka")}
        />
      </RootComponent>
    );
  }
};

export default MenuScreen;
