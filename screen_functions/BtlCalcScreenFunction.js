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

  const roi =
    ((annual_income - total_annual_expenses) / total_investment) * 100;
  const monthly_cashflow = (annual_income - total_annual_expenses) / 12;
  const investment_recovery_years = (
    total_investment /
    (monthly_cashflow * 12)
  ).toFixed(0);
  let year1 = monthly_cashflow * 12 - total_investment;
  let year2 = year1 + monthly_cashflow * 12;
  let year3 = year2 + monthly_cashflow * 12;
  let year4 = year3 + monthly_cashflow * 12;
  let year5 = year4 + monthly_cashflow * 12;

  // make arrays to use in the modal to show the results
  // summary block fields
  const summaryBlockFields = [
    {
      fieldTitle: "Total investment",
      fieldValue: intToPound(total_investment),
    },
    {
      fieldTitle: "Annual income",
      fieldValue: intToPound(annual_income),
    },
    {
      fieldTitle: "Annual expenses",
      fieldValue: intToPound(total_annual_expenses),
    },
  ];
  // Result block fields
  const investmentReturnFields = [
    {
      fieldTitle: "Return on investment",
      fieldValue: roi.toFixed(2) + " %",
    },
    {
      fieldTitle: "Net monthly cash flow",
      fieldValue: intToPound(monthly_cashflow),
    },
    {
      fieldTitle: "Net annual cash flow",
      fieldValue: intToPound(monthly_cashflow * 12),
    },
    {
      fieldTitle: "Invested money back",
      fieldValue:
        investment_recovery_years > 0
          ? "In " + investment_recovery_years + " years"
          : "Never",
    },
  ];
  const yearlyReturnFields = [
    {
      fieldTitle: "Year 1",
      fieldValue: intToPound(year1),
    },
    {
      fieldTitle: "Year 2",
      fieldValue: intToPound(year2),
    },
    {
      fieldTitle: "Year 3",
      fieldValue: intToPound(year3),
    },
    {
      fieldTitle: "Year 4",
      fieldValue: intToPound(year4),
    },
    {
      fieldTitle: "Year 5",
      fieldValue: intToPound(year5),
    },
  ];
  const vacantRunningFields = [
    {
      fieldTitle: "Monthly vacant runnig costs",
      fieldValue: intToPound(total_annual_expenses / 12),
    },
    {
      fieldTitle: "Yearly vacant runnig costs",
      fieldValue: intToPound(total_annual_expenses),
    },
  ];
  const emergencyfundsFields = [
    {
      fieldTitle: "Minimum (recommended)",
      fieldValue: intToPound(total_annual_expenses * 6),
    },
    {
      fieldTitle: "Maximum (recommended)",
      fieldValue: intToPound(total_annual_expenses),
    },
  ];
  // make array which contains all the block to show in the result modal
  const fieldsBlockContainer = [
    { title: "Investment Summary", fields: summaryBlockFields },
    { title: "Investent Returns", fields: investmentReturnFields },
    { title: "Cumulative Returns", fields: yearlyReturnFields },
    { title: "Vacant Running Costs", fields: vacantRunningFields },
    { title: "Emergency Funds Should Have", fields: emergencyfundsFields },
  ];
  // navigate to the result model to show result with array of all block of fields
  navigation.navigate("Results", { fieldsBlockContainer });
};

// message for the screen header button
export const ScreenMessage = "ah";
