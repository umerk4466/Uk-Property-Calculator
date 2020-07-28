// import React from "react";
import { Keyboard } from "react-native";

// function for calculation of the screen
export const LoanToValueScreenFunction = ({ values, actions }) => {
  Keyboard.dismiss();
  // Calculations
  let mortgage_needed =
    values.property_price > values.deposit
      ? values.property_price - values.deposit
      : 0;
  let ltv = mortgage_needed / values.property_price;
  const result = ltv * 100;
  // set result
  actions.setFieldValue("final_result", result.toFixed(1));
};

// message for the screen header button
export const ScreenMessage =
  "Loan-to-value (LTV) is the ratio of mortgage to property value, indicated as a percentage. For example, if you're buying a £100,000 property with a £10,000 (10%) deposit, you'll need a 90% LTV mortgage. This calculator will help you to find what mortgage Loan to Value you'll have to borrow";
