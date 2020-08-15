import React from "react";
import { InteractionManager } from "react-native";

// import components
import RootComponent from "../components/RootComponent";
import CustomLoader from "../components/CustomLoader";
import HeadingText from "../components/HeadingText";
// import custom functions
import CustomModalHeader from "../constants/CustomModalHeader";

const MunuScreen = ({ navigation }) => {
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
        <HeadingText heading="This is menu screen" />
      </RootComponent>
    );
  }
};

export default MunuScreen;
