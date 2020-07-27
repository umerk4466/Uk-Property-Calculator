// import React from "react";
import { Keyboard } from "react-native";

// function for calculation of the screen
export const MortgageCalcScreenFunction = ({ values, navigation }) => {
  Keyboard.dismiss();
  // varibale for Calculations
  let loan_amount =
    values.property_price > values.available_deposit
      ? values.property_price - values.available_deposit
      : 0;
  let interest = values.interest_rate_percentage / 1200;
  let term_in_months = values.mortgage_term_years * 12;
  // interest only mortgage formula
  const interest_only = loan_amount * interest;
  // repayment mortgage formula
  const repayment_mortgage =
    (loan_amount * interest) /
    (1 - Math.pow(1 / (1 + interest), term_in_months));

  // make arrays to use in the modal to show the results
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
      fieldValue: "£" + repayment_mortgage.toFixed(2),
    },
    {
      fieldTitle: "Interest-only Mortgage",
      fieldValue: "£" + interest_only.toFixed(2),
    },
  ];
  // make array which contains all the block to show in the result modal
  const fieldsBlockContainer = [
    { title: "Loan Summary", fields: summaryBlockFields },
    { title: "Monthly Payments", fields: resultBlockFields },
  ];
  // navigate to the result model to show result with array of all block of fields
  navigation.navigate("Results", { fieldsBlockContainer });
};

// message for the screen header button
export const ScreenMessage =
  "Mortgage Calculator give you a rough idea of what your monthly payments could be for various types of mortgage, like (Repayments and Interest-only). ";
