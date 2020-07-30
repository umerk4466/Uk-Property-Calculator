// import React from "react";
import { Keyboard } from "react-native";
import intToPound from "../constants/intToPound";

// function for calculation of the screen
export const MortgageBorrowScreenFunction = ({ values, navigation }) => {
  Keyboard.dismiss();
  // varibale for Calculations
  const min_can_borrow =
    (values.first_person_income + values.second_person_income) * 3;
  const max_can_borrow =
    (values.first_person_income + values.second_person_income) * 4.5;

  // make arrays to use in the modal to show the results
  // summary block fields
  const summaryBlockFields = [
    {
      fieldTitle: "Your Annual Income",
      fieldValue: intToPound(values.first_person_income),
    },
    {
      fieldTitle: "2nd Person Income",
      fieldValue: intToPound(values.second_person_income),
    },
  ];
  // Result block fields
  const resultBlockFields = [
    {
      fieldTitle: "Minimum could borrow",
      fieldValue: intToPound(min_can_borrow.toFixed(0)),
    },
    {
      fieldTitle: "Maximum could borrow",
      fieldValue: intToPound(max_can_borrow.toFixed(0)),
    },
  ];
  // make array which contains all the block to show in the result modal
  const fieldsBlockContainer = [
    { title: "Annual Income Summary", fields: summaryBlockFields },
    { title: "Mortgage Can Borrow", fields: resultBlockFields },
  ];
  // navigate to the result model to show result with array of all block of fields
  navigation.navigate("Results", { fieldsBlockContainer });
};

// message for the screen header button
export const ScreenMessage = "MortgageBorrowScreenFunction";
