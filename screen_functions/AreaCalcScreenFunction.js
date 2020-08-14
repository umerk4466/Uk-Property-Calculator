// import React from "react";
import { Keyboard } from "react-native";
import intToPound from "../constants/intToPound";

// function for calculation of the screen
export const AreaCalcScreenFunction = ({ values, navigation }) => {
  Keyboard.dismiss();
  // varibale for Calculations
  let price_per_sqft;
  let price_per_sqmt;
  if (values.area_type == "ft²") {
    price_per_sqft = values.property_price / values.area;
    price_per_sqmt = (values.property_price / values.area) * 10.764;
  } else {
    price_per_sqft = values.property_price / values.area / 10.764;
    price_per_sqmt = values.property_price / values.area;
  }

  // make arrays to use in the modal to show the results
  // summary block fields
  const summaryBlockFields = [
    {
      fieldTitle: "Property Price",
      fieldValue: intToPound(values.property_price),
    },
    {
      fieldTitle: "Property Area",
      fieldValue: values.area + " " + values.area_type,
    },
  ];
  // Result block fields
  const resultBlockFields = [
    {
      fieldTitle: "Price per ft²",
      fieldValue: intToPound(price_per_sqft.toFixed(2)),
    },
    {
      fieldTitle: "Price per m²",
      fieldValue: intToPound(price_per_sqmt.toFixed(2)),
    },
  ];
  // make array which contains all the block to show in the result modal
  const fieldsBlockContainer = [
    { title: "Property And Area Summary", fields: summaryBlockFields },
    { title: "Price Per Area", fields: resultBlockFields },
  ];
  // navigate to the result model to show result with array of all block of fields
  navigation.navigate("Results", { fieldsBlockContainer });
};

// message for the screen header button
export const ScreenMessage = "wh";
