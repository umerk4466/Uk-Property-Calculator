// import React from "react";
import { Keyboard } from "react-native";

// function for calculation of the screen
export const LoanToValueScreenFunction = ({ values, actions }) => {
  // Calculations
  //   const annual_cash_flow =
  //     values.monthly_rental * 12 -
  //     (values.monthly_mortgage + values.other_monthly_costs) * 12;
  //   const annual_roi = (annual_cash_flow / values.initial_deposit) * 100;
  //   // update the "final_result field"
  //   actions.setFieldValue("final_result", annual_roi.toFixed(0));
  // close the keyboard
  Keyboard.dismiss();
};

// message for the screen header button
export const ScreenMessage =
  "Loan-to-value (LTV) is the ratio of mortgage to property value, indicated as a percentage. For example, if you're buying a £100,000 property with a £10,000 (10%) deposit, you'll need a 90% LTV mortgage. This calculator will help you to find what mortgage Loan to Value you'll have to borrow";
