// import React from "react";
import { Keyboard } from "react-native";

export var modalFields = [{ fieldName: "", fieldValue: "" }];
// function for calculation of the screen
export const MortgageCalcScreenFunction = ({ values, actions }) => {
  // Calculations
  // alert(values);
  actions.setFieldValue("final_result", 10);
  // close the keyboard
  Keyboard.dismiss();

  modalFields = [
    { fieldName: "Name is here", fieldValue: values.mortgage_term_years },
    {
      fieldName: "second Name is here",
      fieldValue: values.mortgage_term_years,
    },
  ];
};

// message for the screen header button
export const ScreenMessage = "hahah";
