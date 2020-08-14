import React from "react";
// import stack Navigator
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import custom theme for navigator
import { CustomTheme } from "../constants/navigation-theme";
// import screens to add in stack
import HomeScreen from "../screens/HomeScreen";
import RoiScreen from "../screens/RoiScreen";
import MortgageCalcScreen from "../screens/MortgageCalcScreen";
import LoanToValueScreen from "../screens/LoanToValueScreen";
import MortgageBorrowScreen from "../screens/MortgageBorrowScreen";
import BtlCalcScreen from "../screens/BtlCalcScreen";
import AreaCalcScreen from "../screens/AreaCalcScreen";
import MenuScreen from "../screens/MenuScreen";

import ReslutModalScreen from "../screens/ReslutModalScreen";

const Stack = createStackNavigator();

export default function CustomStackNavigator() {
  return (
    <NavigationContainer theme={CustomTheme}>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BTL Calculator" component={BtlCalcScreen} />
        <Stack.Screen name="ROI Calculator" component={RoiScreen} />
        <Stack.Screen
          name="Mortgage Calculator"
          component={MortgageCalcScreen}
        />
        <Stack.Screen name="LTV Calculator" component={LoanToValueScreen} />
        <Stack.Screen
          name="Borrowing Calculator"
          component={MortgageBorrowScreen}
        />
        <Stack.Screen name="Area Calculator" component={AreaCalcScreen} />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen name="Results" component={ReslutModalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
