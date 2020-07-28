import React, { useState } from "react";
import { Button } from "react-native";
// import components
import RootComponent from "../components/RootComponent";
import HeadingText from "../components/HeadingText";
import BoxWrapper from "../components/BoxWrapper";
import CustomMoneyInput from "../components/CustomMoneyInput";
import CalculateResetButton from "../components/CalculateResetButton";
// import error messages for the fields
import YupErrorMessages from "../constants/YupErrorMessages";
// import calculation function
import {
  MortgageBorrowScreenFunction,
  ScreenMessage,
} from "../screen_functions/MortgageBorrowScreenFunction";
// import function to set message on the header button
import SetHeaderMessage from "../constants/SetHeaderMessage";

// Import formik and yup for calculations and validations
import * as yup from "yup";
import { Formik } from "formik";

// yub Input Fields Validator schema variable
const ValidatorSchema = yup.object({
  first_person_income: YupErrorMessages,
  second_person_income: YupErrorMessages.test(
    "is 0",
    "2nd Person's income connot be 0",
    (value) => value != 0
  ),
});

const MortgageBorrowScreen = ({ navigation }) => {
  // imported function to add right button on the header
  SetHeaderMessage(navigation, ScreenMessage);
  // .......................................
  const [second_applicant, set_second_applicant] = useState(true);
  return (
    <Formik
      initialValues={{
        first_person_income: "",
        second_person_income: 0,
      }}
      validationSchema={ValidatorSchema}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        // calculation function
        MortgageBorrowScreenFunction({ values, navigation });
      }}
    >
      {(props) => (
        <RootComponent>
          {/* Annual income heading and container */}
          <HeadingText paddingTopNone heading="Annual income details" />
          <BoxWrapper>
            {/* first_person_income field */}
            <CustomMoneyInput
              title={"Your annual income (before tax)"}
              placeholder={"£20,00"}
              onBlur={props.handleBlur("first_person_income")}
              value={props.values.first_person_income}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("first_person_income", rawText);
              }}
              error={props.errors.first_person_income}
              touched={props.touched.first_person_income}
            />
            {/* second_person_income field */}
            {second_applicant == true ? (
              <CustomMoneyInput
                title={"2nd person's annual income (before tax)"}
                placeholder={"£30,000"}
                onBlur={props.handleBlur("second_person_income")}
                value={props.values.second_person_income}
                onChangeText={(maskedText, rawText) => {
                  props.setFieldValue("second_person_income", rawText);
                }}
                error={props.errors.second_person_income}
                touched={props.touched.second_person_income}
              />
            ) : null}
          </BoxWrapper>
          {/* /////////////////////////////////////////// */}
          <Button
            title="Press me"
            onPress={() => set_second_applicant(!second_applicant)}
          />
          {/* /////////////////////////////////////////// */}
          {/* Calculate and reset button */}
          <CalculateResetButton
            onPressCalculateBtn={props.handleSubmit}
            calculateBtnTittle="Calculate ROI"
            onPressResetBtn={props.resetForm}
          ></CalculateResetButton>
        </RootComponent>
      )}
    </Formik>
  );
};

export default MortgageBorrowScreen;
