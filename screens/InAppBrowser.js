import React from "react";
import { InteractionManager, View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import CustomLoader from "../components/CustomLoader";
import Colors from "../constants/colors";

const InAppBrowser = ({ route, navigation }) => {
  // get parameters passed to this screen
  const { url } = route.params;
  const { headerTitle } = route.params;
  //   set header title to the screen header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, [navigation]);
  // state for loader gif
  const [isLoading, setIsLoading] = React.useState(true);
  InteractionManager.runAfterInteractions(() => setIsLoading(false));
  //   return component
  if (isLoading) {
    return <CustomLoader />;
  } else {
    return (
      <WebView
        style={styles.WebViewStye}
        renderError={() => (
          <View style={styles.OnErrorScreenViewStyle}>
            <Text>Something is wrong.</Text>
            <Text> Please check you connection and try again!</Text>
          </View>
        )}
        source={{
          uri: url,
        }}
      />
    );
  }
};

export default InAppBrowser;

// InAppBrowser screen Style
const styles = StyleSheet.create({
  WebViewStye: {
    backgroundColor: Colors.BackgroundColor,
  },
  OnErrorScreenViewStyle: {
    position: "absolute",
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: Colors.BackgroundColor,
  },
  LoadingTextStyle: {
    textAlign: "center",
    marginVertical: 5,
  },
});
