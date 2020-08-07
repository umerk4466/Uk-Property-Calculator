import React, { useState } from "react";
import { View } from "react-native";

// import components
import RootComponent from "../components/RootComponent";
import HeadingText from "../components/HeadingText";
import BoxWrapper from "../components/BoxWrapper";
import CustomSingleRowMoneyInput from "../components/CustomSingleRowMoneyInput";

import CalculateResetButton from "../components/CalculateResetButton";
import CustomRadioBoxes from "../components/CustomRadioBoxes";

// import error messages for the fields
import YupErrorMessages from "../constants/YupErrorMessages";
// import calculation function
import {
  BtlCalcScreenFunction,
  ScreenMessage,
} from "../screen_functions/BtlCalcScreenFunction";
// import function to set message on the header button
import SetHeaderMessage from "../constants/SetHeaderMessage";

// Import formik and yup for calculations and validations
import * as yup from "yup";
import { Formik } from "formik";

// yub Input Fields Validator schema variable
const ValidatorSchema = yup.object({
  // property details
  property_full_price: YupErrorMessages,
  monthly_rent: YupErrorMessages,
  other_monthly_income: YupErrorMessages,
  // purchase costs
  deposit: YupErrorMessages,
  mortgage_value_fee: YupErrorMessages,
  mortgage_arrangement_fee: YupErrorMessages,
  mortgage_booking_fee: YupErrorMessages,
  mortgage_broker_fee: YupErrorMessages,
  solicitor_fee: YupErrorMessages,
  survey_fee: YupErrorMessages,
  conveyancing_fee: YupErrorMessages,
  land_registry_fee: YupErrorMessages,
  stamp_duty: YupErrorMessages,
  initial_refurbishment: YupErrorMessages,
  void_holding_costs: YupErrorMessages,
  other_purchase_costs: YupErrorMessages,
  // Annually Recurring Costs
  buildings_insurance: YupErrorMessages,
  contents_insurance: YupErrorMessages,
  landlord_liability_insurance: YupErrorMessages,
  rent_insurance: YupErrorMessages,
  annual_maintenance_costs: YupErrorMessages,
  ground_rent: YupErrorMessages,
  service_charge: YupErrorMessages,
  redecorate_costs: YupErrorMessages,
  annual_regulatory_safety_costs: YupErrorMessages,
  other_annual_costs: YupErrorMessages,
  // Monthly Recurring Costs
  monthly_mortgages_payments: YupErrorMessages,
  self_management_costs: YupErrorMessages,
  gas_electricity_bills: YupErrorMessages,
  water_bill: YupErrorMessages,
  counsel_tax: YupErrorMessages,
  tv_licence_broadband_etc: YupErrorMessages,
  parking_permit_charges: YupErrorMessages,
  other_monthly_costs: YupErrorMessages,
});

const BtlCalcScreen = ({ navigation }) => {
  // imported function to add right button on the header
  SetHeaderMessage(navigation, ScreenMessage);
  // State for changing CustomRadioBoxes
  const [use_mortgage, set_mortgage] = useState(true);
  return (
    <Formik
      initialValues={{
        // property details
        property_full_price: "",
        monthly_rent: "",
        other_monthly_income: 0,
        // purchase costs
        deposit: "",
        mortgage_value_fee: use_mortgage == true ? "" : 0,
        mortgage_arrangement_fee: use_mortgage == true ? "" : 0,
        mortgage_booking_fee: use_mortgage == true ? "" : 0,
        mortgage_broker_fee: use_mortgage == true ? "" : 0,
        solicitor_fee: "",
        survey_fee: "",
        conveyancing_fee: "",
        land_registry_fee: "",
        stamp_duty: "",
        initial_refurbishment: "",
        void_holding_costs: "",
        other_purchase_costs: 0,
        // Annually Recurring Costs
        buildings_insurance: "",
        contents_insurance: 0,
        landlord_liability_insurance: "",
        rent_insurance: 0,
        annual_maintenance_costs: "",
        ground_rent: "",
        service_charge: "",
        void_period_percentage: 0.0,
        redecorate_costs: "",
        annual_regulatory_safety_costs: "",
        other_annual_costs: 0,
        // Monthly Recurring Costs
        monthly_mortgages_payments: use_mortgage == true ? "" : 0,
        letting_agent_percentage: 0.0,
        self_management_costs: "",
        gas_electricity_bills: "",
        water_bill: "",
        counsel_tax: "",
        tv_licence_broadband_etc: "",
        parking_permit_charges: "",
        other_monthly_costs: "",
      }}
      validationSchema={ValidatorSchema}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        // calculation function
        BtlCalcScreenFunction({ values, navigation });
      }}
    >
      {(props) => (
        <RootComponent>
          <HeadingText paddingTopNone heading="Property Details" />
          <BoxWrapper>
            {/* Property Full Price */}
            <CustomSingleRowMoneyInput
              title={"Property full price"}
              helpText={"All TH"}
              placeholder={"£125,000"}
              onBlur={props.handleBlur("property_full_price")}
              value={props.values.property_full_price}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("property_full_price", rawText);
              }}
              error={props.errors.property_full_price}
              touched={props.touched.property_full_price}
            />
            {/* Monthly rent field */}
            <CustomSingleRowMoneyInput
              title={"Monthly rent"}
              placeholder={"£1000"}
              onBlur={props.handleBlur("monthly_rent")}
              value={props.values.monthly_rent}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("monthly_rent", rawText);
              }}
              error={props.errors.monthly_rent}
              touched={props.touched.monthly_rent}
            />
            {/* Other Monthly Income field */}
            <CustomSingleRowMoneyInput
              title={"Other monthly income"}
              onBlur={props.handleBlur("other_monthly_income")}
              value={props.values.other_monthly_income}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("other_monthly_income", rawText);
              }}
              error={props.errors.other_monthly_income}
              touched={props.touched.other_monthly_income}
            />
          </BoxWrapper>
          <HeadingText heading="Are you using mortgage?" />
          {/* Radio button for mortgage fields selection */}
          <CustomRadioBoxes
            firstTitle="Yes I am"
            selectFirst={use_mortgage}
            onFirstPress={() => set_mortgage(true)}
            secondTitle="No I am not"
            onSecondPress={() => set_mortgage(false)}
          ></CustomRadioBoxes>
          <HeadingText heading="Purchase Costs" />
          <BoxWrapper>
            {/* Deposit Field */}
            <CustomSingleRowMoneyInput
              title={"Deposit"}
              placeholder={"£31,000"}
              onBlur={props.handleBlur("deposit")}
              value={props.values.deposit}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("deposit", rawText);
              }}
              error={props.errors.deposit}
              touched={props.touched.deposit}
            />
            {use_mortgage == true ? (
              <View>
                {/* Mortgage valuation fee Field */}
                <CustomSingleRowMoneyInput
                  title={"Mtge valuation fee"}
                  placeholder={"£400"}
                  onBlur={props.handleBlur("mortgage_value_fee")}
                  value={props.values.mortgage_value_fee}
                  onChangeText={(maskedText, rawText) => {
                    props.setFieldValue("mortgage_value_fee", rawText);
                  }}
                  error={props.errors.mortgage_value_fee}
                  touched={props.touched.mortgage_value_fee}
                />
                {/* Mortgage arrangement fee Field */}
                <CustomSingleRowMoneyInput
                  title={"Mtge Arrangement fee"}
                  placeholder={"£2,000"}
                  onBlur={props.handleBlur("mortgage_arrangement_fee")}
                  value={props.values.mortgage_arrangement_fee}
                  onChangeText={(maskedText, rawText) => {
                    props.setFieldValue("mortgage_arrangement_fee", rawText);
                  }}
                  error={props.errors.mortgage_arrangement_fee}
                  touched={props.touched.mortgage_arrangement_fee}
                />
                {/* Mortgage Booking fee Field */}
                <CustomSingleRowMoneyInput
                  title={"Mtge Booking fee"}
                  placeholder={"£150"}
                  onBlur={props.handleBlur("mortgage_booking_fee")}
                  value={props.values.mortgage_booking_fee}
                  onChangeText={(maskedText, rawText) => {
                    props.setFieldValue("mortgage_booking_fee", rawText);
                  }}
                  error={props.errors.mortgage_booking_fee}
                  touched={props.touched.mortgage_booking_fee}
                />
                {/* Mortgage broker fee Field */}
                <CustomSingleRowMoneyInput
                  title={"Mtge broker fee"}
                  placeholder={"£150"}
                  onBlur={props.handleBlur("mortgage_broker_fee")}
                  value={props.values.mortgage_broker_fee}
                  onChangeText={(maskedText, rawText) => {
                    props.setFieldValue("mortgage_broker_fee", rawText);
                  }}
                  error={props.errors.mortgage_broker_fee}
                  touched={props.touched.mortgage_broker_fee}
                />
              </View>
            ) : null}
            {/* Solicitor Field */}
            <CustomSingleRowMoneyInput
              title={"Solicitor fee"}
              placeholder={"£800"}
              onBlur={props.handleBlur("solicitor_fee")}
              value={props.values.solicitor_fee}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("solicitor_fee", rawText);
              }}
              error={props.errors.solicitor_fee}
              touched={props.touched.solicitor_fee}
            />
            {/* Survey Field */}
            <CustomSingleRowMoneyInput
              title={"Survey fee"}
              placeholder={"£700"}
              onBlur={props.handleBlur("survey_fee")}
              value={props.values.survey_fee}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("survey_fee", rawText);
              }}
              error={props.errors.survey_fee}
              touched={props.touched.survey_fee}
            />
            {/* Conveyancing Field */}
            <CustomSingleRowMoneyInput
              title={"Conveyancing fee"}
              placeholder={"£1,000"}
              onBlur={props.handleBlur("conveyancing_fee")}
              value={props.values.conveyancing_fee}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("conveyancing_fee", rawText);
              }}
              error={props.errors.conveyancing_fee}
              touched={props.touched.conveyancing_fee}
            />
            {/* Land registry Field */}
            <CustomSingleRowMoneyInput
              title={"Land registry fee"}
              placeholder={"£500"}
              onBlur={props.handleBlur("land_registry_fee")}
              value={props.values.land_registry_fee}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("land_registry_fee", rawText);
              }}
              error={props.errors.land_registry_fee}
              touched={props.touched.land_registry_fee}
            />
            {/* Stamp duty Field */}
            <CustomSingleRowMoneyInput
              title={"Stamp duty"}
              placeholder={"£2,500"}
              onBlur={props.handleBlur("stamp_duty")}
              value={props.values.stamp_duty}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("stamp_duty", rawText);
              }}
              error={props.errors.stamp_duty}
              touched={props.touched.stamp_duty}
            />
            {/* Initial refurbishment Field */}
            <CustomSingleRowMoneyInput
              title={"Initial refurbishment "}
              placeholder={"£1,500"}
              onBlur={props.handleBlur("initial_refurbishment")}
              value={props.values.initial_refurbishment}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("initial_refurbishment", rawText);
              }}
              error={props.errors.initial_refurbishment}
              touched={props.touched.initial_refurbishment}
            />
            {/* Void/Holding cost Field */}
            <CustomSingleRowMoneyInput
              title={"Void/Holding costs "}
              placeholder={"£1,000"}
              onBlur={props.handleBlur("void_holding_costs")}
              value={props.values.void_holding_costs}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("void_holding_costs", rawText);
              }}
              error={props.errors.void_holding_costs}
              touched={props.touched.void_holding_costs}
            />
            {/* Other Purchase cost Field */}
            <CustomSingleRowMoneyInput
              title={"Other purchase costs "}
              placeholder={"£500"}
              onBlur={props.handleBlur("other_purchase_costs")}
              value={props.values.other_purchase_costs}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("other_purchase_costs", rawText);
              }}
              error={props.errors.other_purchase_costs}
              touched={props.touched.other_purchase_costs}
            />
          </BoxWrapper>
          <HeadingText heading="Annually Recurring Costs" />
          <BoxWrapper>
            {/* Buildings insurance cost Field */}
            <CustomSingleRowMoneyInput
              title={"Buildings insurance"}
              placeholder={"£163"}
              onBlur={props.handleBlur("buildings_insurance")}
              value={props.values.buildings_insurance}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("buildings_insurance", rawText);
              }}
              error={props.errors.buildings_insurance}
              touched={props.touched.buildings_insurance}
            />
            {/* Contents insurance  cost Field */}
            <CustomSingleRowMoneyInput
              title={"Contents insurance "}
              placeholder={"£139"}
              onBlur={props.handleBlur("contents_insurance")}
              value={props.values.contents_insurance}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("contents_insurance", rawText);
              }}
              error={props.errors.contents_insurance}
              touched={props.touched.contents_insurance}
            />
            {/* Landlord liability Insurance cost Field */}
            <CustomSingleRowMoneyInput
              title={"Landlord liability Insurance"}
              placeholder={"£170"}
              onBlur={props.handleBlur("landlord_liability_insurance")}
              value={props.values.landlord_liability_insurance}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("landlord_liability_insurance", rawText);
              }}
              error={props.errors.landlord_liability_insurance}
              touched={props.touched.landlord_liability_insurance}
            />
            {/* Rent insurance cost Field */}
            <CustomSingleRowMoneyInput
              title={"Rent insurance"}
              placeholder={"£96"}
              onBlur={props.handleBlur("rent_insurance")}
              value={props.values.rent_insurance}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("rent_insurance", rawText);
              }}
              error={props.errors.rent_insurance}
              touched={props.touched.rent_insurance}
            />
            {/* Maintenance costs Field */}
            <CustomSingleRowMoneyInput
              title={"Maintenance costs"}
              placeholder={"£1,250"}
              onBlur={props.handleBlur("annual_maintenance_costs")}
              value={props.values.annual_maintenance_costs}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("annual_maintenance_costs", rawText);
              }}
              error={props.errors.annual_maintenance_costs}
              touched={props.touched.annual_maintenance_costs}
            />
            {/* Ground rent cost Field */}
            <CustomSingleRowMoneyInput
              title={"Ground rent"}
              placeholder={"£2,200"}
              onBlur={props.handleBlur("ground_rent")}
              value={props.values.ground_rent}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("ground_rent", rawText);
              }}
              error={props.errors.ground_rent}
              touched={props.touched.ground_rent}
            />
            {/* Service charge cost Field */}
            <CustomSingleRowMoneyInput
              title={"Service charge"}
              placeholder={"£1,200"}
              onBlur={props.handleBlur("service_charge")}
              value={props.values.service_charge}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("service_charge", rawText);
              }}
              error={props.errors.service_charge}
              touched={props.touched.service_charge}
            />
            {/* Void period Field */}
            <CustomSingleRowMoneyInput
              percentageField
              title={"Void period"}
              onBlur={props.handleBlur("void_period_percentage")}
              value={props.values.void_period_percentage}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("void_period_percentage", rawText);
              }}
              error={props.errors.void_period_percentage}
              touched={props.touched.void_period_percentage}
            />
            {/* Redecorate Costs cost Field */}
            <CustomSingleRowMoneyInput
              title={"Redecorate costs"}
              placeholder={"£300"}
              onBlur={props.handleBlur("redecorate_costs")}
              value={props.values.redecorate_costs}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("redecorate_costs", rawText);
              }}
              error={props.errors.redecorate_costs}
              touched={props.touched.redecorate_costs}
            />
            {/* Annual Regulatory safety cost Field */}
            <CustomSingleRowMoneyInput
              title={"Regulatory safety checks"}
              placeholder={"£196"}
              onBlur={props.handleBlur("annual_regulatory_safety_costs")}
              value={props.values.annual_regulatory_safety_costs}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("annual_regulatory_safety_costs", rawText);
              }}
              error={props.errors.annual_regulatory_safety_costs}
              touched={props.touched.annual_regulatory_safety_costs}
            />
            {/* Other Annual Costs Field */}
            <CustomSingleRowMoneyInput
              title={"Other annual costs"}
              placeholder={"£100"}
              onBlur={props.handleBlur("other_annual_costs")}
              value={props.values.other_annual_costs}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("other_annual_costs", rawText);
              }}
              error={props.errors.other_annual_costs}
              touched={props.touched.other_annual_costs}
            />
          </BoxWrapper>
          {/* Calculate and reset button */}
          <CalculateResetButton
            onPressCalculateBtn={props.handleSubmit}
            calculateBtnTittle="Calculate"
            onPressResetBtn={props.resetForm}
          ></CalculateResetButton>
        </RootComponent>
      )}
    </Formik>
  );
};

export default BtlCalcScreen;
