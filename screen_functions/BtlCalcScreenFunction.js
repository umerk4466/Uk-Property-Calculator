// import React from "react";
import { Keyboard } from "react-native";
import intToPound from "../constants/intToPound";
import percentageToNum from "../constants/percentageToNum";

// function for calculation of the screen
export const BtlCalcScreenFunction = ({ values, navigation }) => {
  Keyboard.dismiss();
  // varibale for Calculations
  const total_investment =
    values.deposit +
    values.mortgage_value_fee +
    values.mortgage_arrangement_fee +
    values.mortgage_booking_fee +
    values.mortgage_broker_fee +
    values.solicitor_fee +
    values.survey_fee +
    values.conveyancing_fee +
    values.land_registry_fee +
    values.stamp_duty +
    values.initial_refurbishment +
    values.void_holding_costs +
    values.other_purchase_costs;
  const annual_income =
    (values.monthly_rent + values.other_monthly_income) * 12;
  let monthly_expenses =
    values.monthly_mortgages_payments +
    percentageToNum(values.letting_agent_percentage, values.monthly_rent) +
    values.self_management_costs +
    values.gas_electricity_bills +
    values.water_bill +
    values.counsel_tax +
    values.tv_licence_broadband_etc +
    values.parking_permit_charges +
    values.other_monthly_costs;
  const total_annual_expenses =
    values.buildings_insurance +
    values.contents_insurance +
    values.landlord_liability_insurance +
    values.rent_insurance +
    values.annual_maintenance_costs +
    values.ground_rent +
    values.service_charge +
    percentageToNum(values.void_period_percentage, annual_income) +
    values.redecorate_costs +
    values.annual_regulatory_safety_costs +
    values.other_annual_costs +
    monthly_expenses * 12;

  alert(
    "annual_income " +
      annual_income +
      " total_annual_expenses " +
      total_annual_expenses +
      " total_investment " +
      total_investment
  );
  // make arrays to use in the modal to show the results
  // summary block fields
  // const summaryBlockFields = [
  //   {
  //     fieldTitle: "Your Annual Income",
  //     fieldValue: intToPound(values.first_person_income),
  //   },
  //   {
  //     fieldTitle: "2nd Person Income",
  //     fieldValue: intToPound(values.second_person_income),
  //   },
  // ];
  // // Result block fields
  // const resultBlockFields = [
  //   {
  //     fieldTitle: "Minimum could borrow",
  //     fieldValue: intToPound(min_can_borrow.toFixed(0)),
  //   },
  //   {
  //     fieldTitle: "Maximum could borrow",
  //     fieldValue: intToPound(max_can_borrow.toFixed(0)),
  //   },
  // ];
  // // make array which contains all the block to show in the result modal
  // const fieldsBlockContainer = [
  //   { title: "Annual Income Summary", fields: summaryBlockFields },
  //   { title: "Mortgage Can Borrow", fields: resultBlockFields },
  // ];
  // // navigate to the result model to show result with array of all block of fields
  // navigation.navigate("Results", { fieldsBlockContainer });
};

// message for the screen header button
export const ScreenMessage = "ah";
