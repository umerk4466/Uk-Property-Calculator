// import React from "react";
import { Keyboard } from "react-native";

// function for calculation of the screen
export const MortgageCalcScreenFunction = ({ values, actions }) => {
  alert(values);
  actions.setFieldValue("final_result", 10);
  Keyboard.dismiss();
};

// message for the screen
export const ScreenMessage = "hahah";
