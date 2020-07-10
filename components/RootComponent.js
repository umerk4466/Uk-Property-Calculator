// This the root component and it handle status bar and nodg. So your main screen appear in safe area
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

const RootComponent = React.forwardRef((props, ref) => (
  <SafeAreaView style={styles.ScrollViewStyle}>
    <ScrollView
      ref={ref}
      contentContainerStyle={
        props.noPadding ? null : styles.ScrollViewContainer
      }
      keyboardShouldPersistTaps={"handled"}
    >
      {props.children}
    </ScrollView>
  </SafeAreaView>
));

export default RootComponent;

const styles = StyleSheet.create({
  ScrollViewStyle: {
    flex: 1
  },
  ScrollViewContainer: {
    padding: 10
  }
});
