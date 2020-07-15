import React from "react";
import { Keyboard } from "react-native";
// import components
import RootComponent from "../components/RootComponent";
import ResultBox from "../components/ResultBox";
import HeadingText from "../components/HeadingText";
import BoxWrapper from "../components/BoxWrapper";
import CustomMoneyInput from "../components/CustomMoneyInput";
import CustomNumbersInput from "../components/CustomNumbersInput";
import CalculateResetButton from "../components/CalculateResetButton";
// import error messages for the fields
import YupErrorMessages from "../constants/YupErrorMessages";
// import function for scrolling to top
import scrollToTop from "../constants/scroll-up";
// import function to set message on the header button
import SetHeaderMessage from "../constants/SetHeaderMessage";

// Import formik and yup for calculations and validations
import * as yup from "yup";
import { Formik } from "formik";

// yub Input Fields Validator schema variable
const ValidatorSchema = yup.object({
  property_price: YupErrorMessages,
  available_deposit: YupErrorMessages,
  interest_rate_percentage: yup.number("ss").required(),
  mortgage_term_years: YupErrorMessages
});

const MortgageCalcScreen = ({ navigation }) => {
  // define ref variable, for automatic scrolling
  const scrollRef = React.useRef();
  // imported function to add right button on the header
  SetHeaderMessage(
    navigation,
    "Return on Investment (ROI) measures how much money or profit is made on an investment as a percentage of the cost of that investment."
  );
  return (
    <Formik
      initialValues={{
        property_price: "",
        available_deposit: "",
        interest_rate_percentage: "",
        mortgage_term_years: "",
        final_result: 0
      }}
      validationSchema={ValidatorSchema}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        console.log(typeof values.interest_rate_percentage);
        console.log(typeof values.mortgage_term_years);
        console.log(typeof values.available_deposit);

        // // get all the filed data and calculate
        // const annual_cash_flow =
        //   values.property_price * 12 -
        //   (values.available_deposit + values.interest_rate_percentage) * 12;
        // const annual_roi =
        //   (annual_cash_flow / values.mortgage_term_years) * 100;
        // // update the "final_result field"
        // actions.setFieldValue("final_result", annual_roi.toFixed(0));
        // // scroll to top
        // scrollToTop(scrollRef);
        // Keyboard.dismiss();
      }}
    >
      {props => (
        <RootComponent ref={scrollRef}>
          {/* ROI result box */}
          <ResultBox
            title="Return on investment"
            result={props.values.final_result}
            sign="% p.a"
          />
          {/* Property details container */}
          <HeadingText heading="Property And Mortgage Details" />
          <BoxWrapper>
            {/*Price of the property field */}
            <CustomMoneyInput
              title={"Price of the property"}
              placeholder={"£125,000"}
              onBlur={props.handleBlur("property_price")}
              value={props.values.property_price}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("property_price", rawText);
              }}
              error={props.errors.property_price}
              touched={props.touched.property_price}
            />
            {/* Available deposit field */}
            <CustomMoneyInput
              title={"Available deposit"}
              placeholder={"£30,000"}
              onBlur={props.handleBlur("available_deposit")}
              value={props.values.available_deposit}
              onChangeText={(maskedText, rawText) => {
                props.setFieldValue("available_deposit", rawText);
              }}
              error={props.errors.available_deposit}
              touched={props.touched.available_deposit}
            />
            {/* Interest rate (%) field */}
            <CustomNumbersInput
              title={"Interest rate (%)"}
              placeholder={"3.5"}
              maxLength={3}
              onBlur={props.handleBlur("interest_rate_percentage")}
              value={props.values.interest_rate_percentage}
              onChangeText={Text => {
                props.setFieldValue("interest_rate_percentage", Text);
              }}
              error={props.errors.interest_rate_percentage}
              touched={props.touched.interest_rate_percentage}
            />
            {/* Initial investment field */}
            <CustomNumbersInput
              title={"Mortgage term (years)"}
              placeholder={"25"}
              maxLength={2}
              onBlur={props.handleBlur("mortgage_term_years")}
              value={props.values.mortgage_term_years}
              onChangeText={Text => {
                props.setFieldValue("mortgage_term_years", Text);
              }}
              error={props.errors.mortgage_term_years}
              touched={props.touched.mortgage_term_years}
            />
          </BoxWrapper>
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

export default MortgageCalcScreen;
