import React, { useState } from "react";
// import components
import RootComponent from "../components/RootComponent";
import ResultBox from "../components/ResultBox";
import HeadingText from "../components/HeadingText";
import BoxWrapper from "../components/BoxWrapper";
import CustomMoneyInput from "../components/CustomMoneyInput";
import CalculateResetButton from "../components/CalculateResetButton";
import CustomSlider from "../components/CustomSlider";
// import error messages for the fields
import YupErrorMessages from "../constants/YupErrorMessages";
// import calculation function
import {
  MortgageCalcScreenFunction,
  ScreenMessage,
} from "../screen_functions/MortgageCalcScreenFunction";
// import function for scrolling to top
import scrollToTop from "../constants/scroll-up";
// import function to set message on the header button
import SetHeaderMessage from "../constants/SetHeaderMessage";

// Import formik and yup for calculations and validations
import * as yup from "yup";
import { Formik } from "formik";

import CustomModal from "../components/CustomModal";

// yub Input Fields Validator schema variable
const ValidatorSchema = yup.object({
  property_price: YupErrorMessages,
  available_deposit: YupErrorMessages,
});

const MortgageCalcScreen = ({ navigation }) => {
  // imported function to add right button on the header
  SetHeaderMessage(navigation, ScreenMessage);
  // state for show or hide result Modal
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Formik
      initialValues={{
        property_price: "",
        available_deposit: "",
        interest_rate_percentage: 2.7,
        mortgage_term_years: 25,
        final_result: 0,
      }}
      validationSchema={ValidatorSchema}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        // calculation function
        MortgageCalcScreenFunction({ values, actions });
        // // scroll to top
        // scrollToTop(scrollRef);
        // show model with result
        setModalVisible(true);
      }}
    >
      {(props) => (
        <RootComponent>
          {/* ROI result box */}
          {/* <ResultBox
            title="Return on investment"
            result={props.values.final_result}
            sign="% p.a"
          /> */}
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
            {/* Interest rate (%) slider */}
            <CustomSlider
              title={"Interest rate"}
              start={0}
              end={25}
              floatValue
              value={props.values.interest_rate_percentage}
              onValueChange={(value) => {
                props.setFieldValue("interest_rate_percentage", value);
              }}
              step={0.1}
              suffix={"%"}
            />
            {/* Mortgage term (years) slider */}
            <CustomSlider
              title={"Mortgage term"}
              start={5}
              end={40}
              value={props.values.mortgage_term_years}
              onValueChange={(value) => {
                props.setFieldValue("mortgage_term_years", value);
              }}
              step={5}
              suffix={"years"}
            />
          </BoxWrapper>
          {/* Calculate and reset button */}
          <CalculateResetButton
            onPressCalculateBtn={props.handleSubmit}
            calculateBtnTittle="Calculate ROI"
            onPressResetBtn={props.resetForm}
          ></CalculateResetButton>
          {/* Custom Modal for showing results */}
          <CustomModal
            isVisible={modalVisible}
            closeModel={() => {
              setModalVisible(false);
            }}
            fields={[
              ["Mortgages Term", props.values.mortgage_term_years],
              ["Property Price", props.values.property_price],
            ]}
            textValue={props.values.mortgage_term_years}
            message={"trying to make a basic component modal"}
          />
        </RootComponent>
      )}
    </Formik>
  );
};

export default MortgageCalcScreen;
