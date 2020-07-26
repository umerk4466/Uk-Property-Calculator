// import React from "react";
import { Keyboard } from "react-native";

// function for calculation of the screen
export const MortgageCalcScreenFunction = ({ values, actions, navigation }) => {
  // Calculations
  actions.setFieldValue("final_result", 10);
  // close the keyboard
  Keyboard.dismiss();

  // arrays of the fileds to use in the modal to show the results
  // summary block fields
  const summaryBlockFields = [
    { fieldTitle: "Property Price", fieldValue: values.mortgage_term_years },
    { fieldTitle: "Desposit", fieldValue: values.mortgage_term_years },
    { fieldTitle: "Interest Rate (%)", fieldValue: values.mortgage_term_years },
    { fieldTitle: "Mortgage Term", fieldValue: values.mortgage_term_years },
  ];
  // Result block fields
  const resultBlockFields = [
    { fieldTitle: "Repayments", fieldValue: values.mortgage_term_years },
    { fieldTitle: "Interest Only", fieldValue: values.mortgage_term_years },
  ];

  // make array which contains all the block to show in the result modal
  const fieldsBlockContainer = [
    { title: "Summary", fields: summaryBlockFields },
    { title: "Monthly Mortgage", fields: resultBlockFields },
  ];

  // navigate to the result model to show result with array of all block of fields
  navigation.navigate("Results", { fieldsBlockContainer });
};

// message for the screen header button
export const ScreenMessage = "hahah";
