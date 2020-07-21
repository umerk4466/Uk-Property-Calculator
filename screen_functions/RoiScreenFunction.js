// import React from "react";
import { Keyboard } from "react-native";

// function for calculation of the screen
export const RoiScreenFunction = ({ values, actions }) => {
  // Calculations
  const annual_cash_flow =
    values.monthly_rental * 12 -
    (values.monthly_mortgage + values.other_monthly_costs) * 12;
  const annual_roi = (annual_cash_flow / values.initial_deposit) * 100;
  // update the "final_result field"
  actions.setFieldValue("final_result", annual_roi.toFixed(0));
  // close the keyboard
  Keyboard.dismiss();
};

// message for the screen header button
export const ScreenMessage =
  "Return on Investment (ROI) measures how much money or profit is made on an investment as a percentage of the cost of that investment.";
