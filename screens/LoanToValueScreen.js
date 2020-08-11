// import React from "react";
// // import components
// import RootComponent from "../components/RootComponent";
// import ResultBox from "../components/ResultBox";
// import HeadingText from "../components/HeadingText";
// import BoxWrapper from "../components/BoxWrapper";
import CustomMoneyInput from "../components/CustomMoneyInput";
// import CalculateResetButton from "../components/CalculateResetButton";
// // import error messages for the fields
// import YupErrorMessages from "../constants/YupErrorMessages";
// // import calculation function
// import {
//   LoanToValueScreenFunction,
//   ScreenMessage
// } from "../screen_functions/LoanToValueScreenFunction";
// // import function for scrolling to top
// import scrollToTop from "../constants/scroll-up";
// // import function to set message on the header button
// import SetHeaderMessage from "../constants/SetHeaderMessage";
// // Import formik and yup for calculations and validations
// import * as yup from "yup";
// import { Formik } from "formik";

// // yub Input Fields Validator schema variable
// const ValidatorSchema = yup.object({
//   property_price: YupErrorMessages,
//   deposit: YupErrorMessages
// });

// const LoanToValueScreen = ({ navigation }) => {
//   // define ref variable, for automatic scrolling
//   const scrollRef = React.useRef();
//   // imported function to add right button on the header
//   SetHeaderMessage(navigation, ScreenMessage);
//   return (
//     <Formik
//       initialValues={{
//         property_price: "",
//         deposit: "",
//         final_result: 0
//       }}
//       validationSchema={ValidatorSchema}
//       enableReinitialize={true}
//       onSubmit={(values, actions) => {
//         // calculation function
//         LoanToValueScreenFunction({ values, actions });
//         // scroll to top
//         scrollToTop(scrollRef);
//       }}
//     >
//       {props => (
//         <RootComponent ref={scrollRef}>
//           {/* ROI result box */}
//           <ResultBox
//             title="Your LTV (loan to value) is"
//             result={props.values.final_result}
//             sign="%"
//           />
//           {/* Property details container */}
//           <HeadingText heading="Property and deposit details" />
//           <BoxWrapper>
//             {/* Property price field */}
//             <CustomMoneyInput
//               title={"Price of the property you plan to buy?"}
//               placeholder={"£250,000"}
//               onBlur={props.handleBlur("property_price")}
//               value={props.values.property_price}
//               onChangeText={(maskedText, rawText) => {
//                 props.setFieldValue("property_price", rawText);
//               }}
//               error={props.errors.property_price}
//               touched={props.touched.property_price}
//             />
//             {/* Deposit field */}
//             <CustomMoneyInput
//               title={"How much deposit you have?"}
//               placeholder={"£30,000"}
//               onBlur={props.handleBlur("deposit")}
//               value={props.values.deposit}
//               onChangeText={(maskedText, rawText) => {
//                 props.setFieldValue("deposit", rawText);
//               }}
//               error={props.errors.deposit}
//               touched={props.touched.deposit}
//             />
//           </BoxWrapper>
//           {/* Calculate and reset button */}
//           <CalculateResetButton
//             onPressCalculateBtn={props.handleSubmit}
//             calculateBtnTittle="Calculate LTV"
//             onPressResetBtn={props.resetForm}
//           ></CalculateResetButton>
//         </RootComponent>
//       )}
//     </Formik>
//   );
// };

// export default LoanToValueScreen;

import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import CustomLoader from "../components/CustomLoader";

const LoanToValueScreen = ({ navigation }) => {
  // state for leader gif
  const [isLoading, setIsLoading] = useState(true);
  // change state of the loading gif once component is loaded
  useEffect(() => {
    setIsLoading(false);
  });
  if (isLoading) {
    return <CustomLoader />;
  } else {
    return (
      <View>
        <View>
          <Text>scrssseen</Text>
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
          <CustomMoneyInput
            title={"How much deposit you have?"}
            placeholder={"£30,000"}
            value={"k"}
            onChangeText={(maskedText, rawText) => {
              alert("ja");
            }}
            error={"s"}
            touched={"props.touched.deposit"}
          />
        </View>
      </View>
    );
  }
};

export default LoanToValueScreen;
