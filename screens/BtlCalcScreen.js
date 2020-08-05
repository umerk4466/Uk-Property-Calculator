import React, { useState } from "react";
// import components
import RootComponent from "../components/RootComponent";
import HeadingText from "../components/HeadingText";
import BoxWrapper from "../components/BoxWrapper";
import CustomMoneyInput from "../components/CustomMoneyInput";
import CustomSingleRowMoneyInput from "../components/CustomSingleRowMoneyInput";

import CalculateResetButton from "../components/CalculateResetButton";
import CustomRadioBoxes from "../components/CustomRadioBoxes";

// import error messages for the fields
import YupErrorMessages from "../constants/YupErrorMessages";
// import calculation function
import {
  BtlCalcScreenFunction,
  ScreenMessage
} from "../screen_functions/BtlCalcScreenFunction";
// import function to set message on the header button
import SetHeaderMessage from "../constants/SetHeaderMessage";

// Import formik and yup for calculations and validations
import * as yup from "yup";
import { Formik } from "formik";

// yub Input Fields Validator schema variable
const ValidatorSchema = yup.object({
  property_full_price: YupErrorMessages,
  monthly_rent: YupErrorMessages,
  other_monthly_income: YupErrorMessages,
  deposit: YupErrorMessages
});

const BtlCalcScreen = ({ navigation }) => {
  // imported function to add right button on the header
  SetHeaderMessage(navigation, ScreenMessage);
  // State for changing CustomRadioBoxes
  const [mortgage, set_mortgage] = useState(true);
  return (
    <Formik
      initialValues={{
        property_full_price: "",
        monthly_rent: "",
        other_monthly_income: 0,
        deposit: ""
      }}
      validationSchema={ValidatorSchema}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        // calculation function
        BtlCalcScreenFunction({ values, navigation });
      }}
    >
      {props => (
        <RootComponent>
          <HeadingText paddingTopNone heading="Property Details" />
          <BoxWrapper>
            {/* Property Full Price */}
            <CustomSingleRowMoneyInput
              title={"Property full price"}
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
              title={"Monthly rent (Estimated)"}
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
