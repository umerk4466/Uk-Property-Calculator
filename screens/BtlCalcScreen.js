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
  const [manage_myself, set_manage_myself] = useState(false);
  const [tenant_pay_bills, set_tenant_pay_bills] = useState(true);

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
        self_management_costs: manage_myself == true ? "" : 0,
        gas_electricity_bills: tenant_pay_bills == false ? "" : 0,
        water_bill: tenant_pay_bills == false ? "" : 0,
        counsel_tax: tenant_pay_bills == false ? "" : 0,
        tv_licence_broadband_etc: tenant_pay_bills == false ? "" : 0,
        parking_permit_charges: tenant_pay_bills == false ? "" : 0,
        other_monthly_costs: 0,
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
              helpText={
                "Full price of the property, the offer which seller agreed to accept from you."
              }
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
              helpText={
                "Enter any other monthly income like income generated from gerage, parking space etc."
              }
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
              title={"Deposit (Initial Investment)"}
              helpText={
                "Enter initial investment (Deposit), the money which you will add in the deal as a deposit."
              }
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
                  helpText={
                    "Add mortgage valuation fee which usually is about £400."
                  }
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
                  helpText={
                    "Add mortgage arrangement fees which usually is between £1000 - £2000 or more."
                  }
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
                  helpText={
                    "Add mortgage booking fee which usually is about £150."
                  }
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
                  helpText={
                    "Add mortgage broker fees which usually starts from £150."
                  }
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
              helpText={
                "Add initial refurbishment costs and also consider about (Removal costs, Furniture and extras)."
              }
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
              title={"Void/Holding costs"}
              helpText={
                "Add Void/Holding costs, the cost which I will be paying until property is rented. Also consider utility cost (gas, electricity and counsel tax), Mortgage payments, insurances etc."
              }
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
              helpText={
                "Add other purchase costs and also consider (estate agent, deal sources) fees etc."
              }
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
              helpText={
                "Add contents insurance if you will have on this property."
              }
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
              helpText={
                "Add landlord liability insurance if you will have on this property."
              }
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
              helpText={
                "Add annual maintenance costs, One popular rule says that 1% of the purchase price of your home should be set aside each year for ongoing maintenance."
              }
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
              helpText={
                "Add annual redecorate costs, also include (Cleaning costs, Gardening costs)."
              }
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
              helpText={
                "Add annual costs of regulatory safety certificates/checks such as (Gas Safety Certificate, EPC, Fire safety checks) etc."
              }
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
          <HeadingText heading="Who will manage the property?" />
          {/* Radio button for monthly costs fields */}
          <CustomRadioBoxes
            firstTitle="Myself"
            selectFirst={manage_myself}
            onFirstPress={() => set_manage_myself(true)}
            secondTitle="Letting Agent"
            onSecondPress={() => set_manage_myself(false)}
          ></CustomRadioBoxes>
          <HeadingText heading="Who will pay household bills?" />
          {/* Radio button for monthly costs fields */}
          <CustomRadioBoxes
            firstTitle="Tenants"
            selectFirst={tenant_pay_bills}
            onFirstPress={() => set_tenant_pay_bills(true)}
            secondTitle="Landlord"
            onSecondPress={() => set_tenant_pay_bills(false)}
          ></CustomRadioBoxes>
          <HeadingText heading="Monthly Recurring Costs" />
          <BoxWrapper>
            {/* Monthly Mortgages Payments Field */}
            {use_mortgage == true ? (
              <CustomSingleRowMoneyInput
                title={"Monthly mortgages Payments"}
                helpText={"Add monthly mortgage payments."}
                placeholder={"£205"}
                onBlur={props.handleBlur("monthly_mortgages_payments")}
                value={props.values.monthly_mortgages_payments}
                onChangeText={(maskedText, rawText) => {
                  props.setFieldValue("monthly_mortgages_payments", rawText);
                }}
                error={props.errors.monthly_mortgages_payments}
                touched={props.touched.monthly_mortgages_payments}
              />
            ) : null}
            {/* All self management costs Field */}
            {manage_myself == true ? (
              <CustomSingleRowMoneyInput
                title={"Self management costs"}
                helpText={
                  "Add all self management costs such as (advertising costs, Landlord association costs) etc or any other costs which will be used to help in renting property."
                }
                placeholder={"£15"}
                onBlur={props.handleBlur("self_management_costs")}
                value={props.values.self_management_costs}
                onChangeText={(maskedText, rawText) => {
                  props.setFieldValue("self_management_costs", rawText);
                }}
                error={props.errors.self_management_costs}
                touched={props.touched.self_management_costs}
              />
            ) : (
              <CustomSingleRowMoneyInput
                percentageField
                title={"Letting agent fees"}
                helpText={
                  "Add monthly letting agent fee also consider extra hidden fees such as (Exit fees, extra Marketing charges, evicting fee, deposit protection fee) etc."
                }
                onBlur={props.handleBlur("letting_agent_percentage")}
                value={props.values.letting_agent_percentage}
                onChangeText={(maskedText, rawText) => {
                  props.setFieldValue("letting_agent_percentage", rawText);
                }}
                error={props.errors.letting_agent_percentage}
                touched={props.touched.letting_agent_percentage}
              />
            )}
            {tenant_pay_bills == false ? (
              <View>
                {/* Gas and electricity bills Field */}
                <CustomSingleRowMoneyInput
                  title={"Gas and electricity bills"}
                  helpText={"Add monthly bills of Gas and Electricity."}
                  placeholder={"£45"}
                  onBlur={props.handleBlur("gas_electricity_bills")}
                  value={props.values.gas_electricity_bills}
                  onChangeText={(maskedText, rawText) => {
                    props.setFieldValue("gas_electricity_bills", rawText);
                  }}
                  error={props.errors.gas_electricity_bills}
                  touched={props.touched.gas_electricity_bills}
                />
                {/* Water bill Field */}
                <CustomSingleRowMoneyInput
                  title={"Water bill"}
                  placeholder={"£15"}
                  onBlur={props.handleBlur("water_bill")}
                  value={props.values.water_bill}
                  onChangeText={(maskedText, rawText) => {
                    props.setFieldValue("water_bill", rawText);
                  }}
                  error={props.errors.water_bill}
                  touched={props.touched.water_bill}
                />
                {/* Counsel tax Field */}
                <CustomSingleRowMoneyInput
                  title={"Counsel tax"}
                  placeholder={"£113"}
                  onBlur={props.handleBlur("counsel_tax")}
                  value={props.values.counsel_tax}
                  onChangeText={(maskedText, rawText) => {
                    props.setFieldValue("counsel_tax", rawText);
                  }}
                  error={props.errors.counsel_tax}
                  touched={props.touched.counsel_tax}
                />
                {/* Tv licence, Broadband, phone bills Field */}
                <CustomSingleRowMoneyInput
                  title={"Broadband, Tv, phone bills"}
                  helpText={
                    "Add monthly costs of Tv licence, Broadband, phone bills etc."
                  }
                  placeholder={"£40"}
                  onBlur={props.handleBlur("tv_licence_broadband_etc")}
                  value={props.values.tv_licence_broadband_etc}
                  onChangeText={(maskedText, rawText) => {
                    props.setFieldValue("tv_licence_broadband_etc", rawText);
                  }}
                  error={props.errors.tv_licence_broadband_etc}
                  touched={props.touched.tv_licence_broadband_etc}
                />
                {/* parking permit charges Field */}
                <CustomSingleRowMoneyInput
                  title={"Parking permit charges"}
                  helpText={"Add parking permit charges if apply."}
                  placeholder={"£25"}
                  onBlur={props.handleBlur("parking_permit_charges")}
                  value={props.values.parking_permit_charges}
                  onChangeText={(maskedText, rawText) => {
                    props.setFieldValue("parking_permit_charges", rawText);
                  }}
                  error={props.errors.parking_permit_charges}
                  touched={props.touched.parking_permit_charges}
                />
              </View>
            ) : null}
            {/* Other Monthly Costs Field */}
            <CustomSingleRowMoneyInput
              title={"Other monthly costs"}
              placeholder={"£15"}
              onBlur={props.handleBlur("other_monthly_costs")}
              value={props.values.other_monthly_costs}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("other_monthly_costs", rawText);
              }}
              error={props.errors.other_monthly_costs}
              touched={props.touched.other_monthly_costs}
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
