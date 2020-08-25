import React from "react";
import { InteractionManager } from "react-native";
// import components
import RootComponent from "../components/RootComponent";
import CustomLoader from "../components/CustomLoader";
import ResultBox from "../components/ResultBox";
import HeadingText from "../components/HeadingText";
import BoxWrapper from "../components/BoxWrapper";
import CustomMoneyInput from "../components/CustomMoneyInput";
import CalculateResetButton from "../components/CalculateResetButton";
// import error messages for the fields
import YupErrorMessages from "../constants/YupErrorMessages";
// import calculation function
import {
  RoiScreenFunction,
  ScreenMessage,
} from "../screen_functions/RoiScreenFunction";
// import function for scrolling to top
import scrollToTop from "../constants/scroll-up";
// import function to set message on the header button
import SetHeaderMessage from "../constants/SetHeaderMessage";
// Import formik and yup for calculation and validation
import * as yup from "yup";
import { Formik } from "formik";

// yub Input Fields Validator schema variable
const ValidatorSchema = yup.object({
  monthly_rental: YupErrorMessages,
  monthly_mortgage: YupErrorMessages,
  other_monthly_costs: YupErrorMessages,
  initial_deposit: YupErrorMessages,
});

const RoiScreen = ({ navigation }) => {
  // define ref variable, for automatic scrolling
  const scrollRef = React.useRef();
  // imported function to add right button on the header
  SetHeaderMessage(navigation, ScreenMessage);
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
          monthly_rental: "",
          monthly_mortgage: "",
          other_monthly_costs: "",
          initial_deposit: "",
          final_result: 0,
        }}
        validationSchema={ValidatorSchema}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          // calculation function
          RoiScreenFunction({ values, actions });
          // scroll to top
          scrollToTop(scrollRef);
        }}
      >
        {(props) => (
          <RootComponent ref={scrollRef}>
            {/* ROI result box */}
            <ResultBox
              title="Return on investment"
              result={props.values.final_result}
              sign="% p.a"
            />
            {/* Property details container */}
            <HeadingText heading="Property Details" />
            <BoxWrapper>
              {/* Monthly rent field */}
              <CustomMoneyInput
                title={"Monthly rent of the property"}
                placeholder={"£500"}
                onBlur={props.handleBlur("monthly_rental")}
                value={props.values.monthly_rental}
                onChangeText={(maskedText, rawText) => {
                  props.setFieldValue("monthly_rental", rawText);
                }}
                error={props.errors.monthly_rental}
                touched={props.touched.monthly_rental}
              />
              {/* Monthy mortgage field */}
              <CustomMoneyInput
                title={"Monthly mortgage payments"}
                placeholder={"£200"}
                onBlur={props.handleBlur("monthly_mortgage")}
                value={props.values.monthly_mortgage}
                onChangeText={(maskedText, rawText) => {
                  props.setFieldValue("monthly_mortgage", rawText);
                }}
                error={props.errors.monthly_mortgage}
                touched={props.touched.monthly_mortgage}
              />
              {/* Other monthly costs field */}
              <CustomMoneyInput
                title={"Other monthly costs"}
                placeholder={"£100"}
                onBlur={props.handleBlur("other_monthly_costs")}
                value={props.values.other_monthly_costs}
                onChangeText={(maskedText, rawText) => {
                  props.setFieldValue("other_monthly_costs", rawText);
                }}
                error={props.errors.other_monthly_costs}
                touched={props.touched.other_monthly_costs}
              />
              {/* Initial investment field */}
              <CustomMoneyInput
                title={"Initial investment (deposit)"}
                placeholder={"£10,000"}
                onBlur={props.handleBlur("initial_deposit")}
                value={props.values.initial_deposit}
                onChangeText={(maskedText, rawText) => {
                  props.setFieldValue("initial_deposit", rawText);
                }}
                error={props.errors.initial_deposit}
                touched={props.touched.initial_deposit}
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
  }
};

export default RoiScreen;
