// import React from "react";
import { Keyboard } from "react-native";

// function for calculation of the screen
export const MortgageCalcScreenFunction = ({ values, actions, navigation }) => {
  Keyboard.dismiss();
  // Calculations
  actions.setFieldValue("final_result", 10);

  // arrays of the fileds to use in the modal to show the results
  // summary block fields
  const summaryBlockFields = [
    { fieldTitle: "Property Price", fieldValue: "£" + values.property_price },
    { fieldTitle: "Desposit", fieldValue: "£" + values.available_deposit },
    {
      fieldTitle: "Interest Rate (%)",
      fieldValue: values.interest_rate_percentage.toFixed(1) + " %",
    },
    {
      fieldTitle: "Mortgage Term",
      fieldValue: values.mortgage_term_years + " years",
    },
  ];
  // Result block fields
  const resultBlockFields = [
    {
      fieldTitle: "Repayment Mortgage",
      fieldValue: values.repayment_mortgage,
    },
    {
      fieldTitle: "Interest-only Mortgage",
      fieldValue: values.interest_only_mortgage,
    },
  ];
  // make array which contains all the block to show in the result modal
  const fieldsBlockContainer = [
    { title: "Summary", fields: summaryBlockFields },
    { title: "Monthly Payments", fields: resultBlockFields },
  ];
  // navigate to the result model to show result with array of all block of fields
  navigation.navigate("Results", { fieldsBlockContainer });
};

// message for the screen header button
export const ScreenMessage = "hahah";
