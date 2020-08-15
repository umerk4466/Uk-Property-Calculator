import React from "react";
import { InteractionManager, Linking } from "react-native";
// import components
import RootComponent from "../components/RootComponent";
import CustomLoader from "../components/CustomLoader";
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
        <CustomTouchableHighlight
          title={"Icons by Icons8"}
          iconName={"link"}
          onPress={() =>
            Linking.openURL("https://icons8.com/icons/set/insert-money")
          }
        />
      </RootComponent>
    );
  }
};

export default MenuScreen;
