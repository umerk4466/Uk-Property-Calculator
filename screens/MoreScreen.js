import React from "react";
import { InteractionManager, Linking, Platform } from "react-native";
// import components
import RootComponent from "../components/RootComponent";
import CustomLoader from "../components/CustomLoader";
import CustomTouchableHighlight from "../components/CustomTouchableHighlight";
// import custom header button functions
import CustomModalHeaderButton from "../constants/CustomModalHeaderButton";

const MoreScreen = ({ navigation }) => {
  // define app id for rating
  const os_url =
    Platform.OS === "android"
      ? "market://details?id=com.whatsapp&hl=en_GB"
      : "market://details?id=com.whatsapp&hl=en_GB";
  // set header like modals
  CustomModalHeaderButton(navigation);
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
          onPress={() => Linking.openURL("mailto:email@email.com")}
        />
        <CustomTouchableHighlight
          title={"Rate Us"}
          iconName={"star"}
          onPress={() => Linking.openURL(os_url)}
        />
        <CustomTouchableHighlight
          title={"Icons by Icons8"}
          iconName={"link"}
          onPress={() =>
            navigation.navigate("InAppBrowser", {
              url: "https://icons8.com/icons/",
              headerTitle: "Icons",
            })
          }
        />
      </RootComponent>
    );
  }
};

export default MoreScreen;
