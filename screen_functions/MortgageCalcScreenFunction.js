// import React from "react";
import { Keyboard } from "react-native";

export var modalFields;
// function for calculation of the screen
export const MortgageCalcScreenFunction = ({ values, actions }) => {
  // Calculations
  // alert(values);
  actions.setFieldValue("final_result", 10);
  // close the keyboard
  Keyboard.dismiss();

  modalFields = [
    { fieldName: "Name is here" },
    { fieldName: "second Name is here" },
  ];
};

// message for the screen header button
export const ScreenMessage = "hahah";
