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
  AreaCalcScreenFunction,
  ScreenMessage,
} from "../screen_functions/AreaCalcScreenFunction";
// import function to set message on the header button
import SetHeaderMessage from "../constants/SetHeaderMessage";
// Import formik and yup for calculations and validations
import * as yup from "yup";
import { Formik } from "formik";

// yub Input Fields Validator schema variable
const ValidatorSchema = yup.object({
  property_price: YupErrorMessages,
  area: YupErrorMessages,
});

const AreaCalcScreen = ({ navigation }) => {
  // state for selection area type
  const [isSqFoot, setIsSqFoot] = React.useState(true);
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
          property_price: "",
          area: "",
          area_type: isSqFoot ? "ft²" : "m²",
        }}
        validationSchema={ValidatorSchema}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          // calculation function
          AreaCalcScreenFunction({ values, navigation });
        }}
      >
        {(props) => (
          <RootComponent>
            {/* Property details heading and container */}
            <HeadingText paddingTopNone heading="Area type of the property" />
            {/* Area Type Radio Button */}
            <CustomRadioBoxes
              firstTitle="square foot"
              selectFirst={isSqFoot}
              onFirstPress={() => setIsSqFoot(true)}
              secondTitle="square meter"
              onSecondPress={() => setIsSqFoot(false)}
            ></CustomRadioBoxes>
            <HeadingText heading="Property and area details" />
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
              {/*Area field */}
              <CustomMoneyInput
                numberField
                title={"Area of the property"}
                placeholder={isSqFoot ? "75ft²" : "75m²"}
                onBlur={props.handleBlur("area")}
                value={props.values.area}
                onChangeText={(maskedText, rawText) => {
                  props.setFieldValue("area", rawText);
                }}
                error={props.errors.area}
                touched={props.touched.area}
              />
            </BoxWrapper>
            {/* Calculate and reset button */}
            <CalculateResetButton
              onPressCalculateBtn={props.handleSubmit}
              calculateBtnTittle="Calculate Price"
              onPressResetBtn={props.resetForm}
            ></CalculateResetButton>
          </RootComponent>
        )}
      </Formik>
    );
  }
};

export default AreaCalcScreen;
