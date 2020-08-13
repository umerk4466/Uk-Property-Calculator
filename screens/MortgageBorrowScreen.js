import React from "react";
import { InteractionManager } from "react-native";
// import components
import RootComponent from "../components/RootComponent";
import CustomLoader from "../components/CustomLoader";
import HeadingText from "../components/HeadingText";
import BoxWrapper from "../components/BoxWrapper";
import CustomMoneyInput from "../components/CustomMoneyInput";
import CalculateResetButton from "../components/CalculateResetButton";
import CustomRadioBoxes from "../components/CustomRadioBoxes";
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
  second_person_income: YupErrorMessages,
});

const MortgageBorrowScreen = ({ navigation }) => {
  // imported function to add right button on the header
  SetHeaderMessage(navigation, ScreenMessage);
  // State for changing CustomRadioBoxes
  const [one_applicant, set_one_applicant] = React.useState(true);
  // state for loader gif
  const [isLoading, setIsLoading] = React.useState(true);
  InteractionManager.runAfterInteractions(() => setIsLoading(false));
  // return component
  if (isLoading) {
    return <CustomLoader />;
  } else {
    return (
      <Formik
        initialValues={{
          first_person_income: "",
          second_person_income: one_applicant == true ? 0 : "",
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
            <HeadingText paddingTopNone heading="How many applicants?" />
            {/* Custom 2 Radio Buttons */}
            <CustomRadioBoxes
              firstTitle="1 Applicant"
              selectFirst={one_applicant}
              onFirstPress={() => set_one_applicant(true)}
              secondTitle="2 Applicants"
              onSecondPress={() => set_one_applicant(false)}
            ></CustomRadioBoxes>
            {/* Annual income heading and container */}
            <HeadingText heading="Annual income details" />
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
              {one_applicant == false ? (
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
  }
};

export default MortgageBorrowScreen;
