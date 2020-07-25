// import React from "react";
import { Keyboard } from "react-native";

// fields to use in the modal
export var modalFields = [{ fieldTitle: "", fieldValue: "" }];

// function for calculation of the screen
export const MortgageCalcScreenFunction = ({ values, actions }) => {
  // Calculations
  // alert(values);
  actions.setFieldValue("final_result", 10);
  // close the keyboard
  Keyboard.dismiss();

  // update array of the fileds to use in the modal to show the results
  modalFields = [
    { fieldTitle: "Name is here", fieldValue: values.mortgage_term_years },
    {
      fieldTitle: "second Name is here",
      fieldValue: values.mortgage_term_years,
    },
  ];
};

// message for the screen header button
export const ScreenMessage = "hahah";
