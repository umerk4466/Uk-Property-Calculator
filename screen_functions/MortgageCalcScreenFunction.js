// import React from "react";
import { Keyboard } from "react-native";

// function for calculation of the screen
export const MortgageCalcScreenFunction = ({ values, actions }) => {
  // Calculations
  alert(values);
  actions.setFieldValue("final_result", 10);
  // close the keyboard
  Keyboard.dismiss();
};

// message for the screen header button
export const ScreenMessage = "hahah";
