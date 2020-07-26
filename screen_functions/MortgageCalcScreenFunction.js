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
    { fieldTitle: "Name is here", fieldValue: values.mortgage_term_years },
    {
      fieldTitle: "second Name is here",
      fieldValue: values.mortgage_term_years,
    },
  ];
  // Result block fields
  const resultBlockFields = [
    { fieldTitle: "Name is here", fieldValue: values.mortgage_term_years },
    {
      fieldTitle: "second Name is here",
      fieldValue: values.mortgage_term_years,
    },
  ];
  const fieldsBlockContainer = [
    { title: "Summary", fields: resultBlockFields },
  ];

  // navigate to the result model to show result with field array
  navigation.navigate("Results", { fieldsBlockContainer });
};

// message for the screen header button
export const ScreenMessage = "hahah";
