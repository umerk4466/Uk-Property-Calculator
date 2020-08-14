import React from "react";
import { InteractionManager } from "react-native";
// import components
import RootComponent from "../components/RootComponent";
import CustomLoader from "../components/CustomLoader";
import TouchableButton from "../components/TouchableButton";

export default function HomeScreen({ navigation }) {
  // state for loader gif
  const [isLoading, setIsLoading] = React.useState(true);
  InteractionManager.runAfterInteractions(() => setIsLoading(false));
  // return component
  if (isLoading) {
    return <CustomLoader />;
  } else {
    return (
      <RootComponent noPadding>
        {/* ROI CALCULATOR */}
        <TouchableButton
          onPress={() => navigation.navigate("ROI Calculator")}
          imgSource={require("../assets/HomeScreen/roi.png")}
          title="ROI Calculator"
          description="Return on investment"
        ></TouchableButton>
        {/* BTL CALCULATOR */}
        <TouchableButton
          onPress={() => navigation.navigate("BTL Calculator")}
          imgSource={require("../assets/HomeScreen/pound.png")}
          title="BTL Calculator"
          description="Buy To Let Calculations"
        ></TouchableButton>
        {/* Net Rental Yield Calculator */}
        {/* <TouchableButton
          onPress={() => navigation.navigate("Net Rental Yield")}
          imgSource={require("../assets/HomeScreen/net_rental_yield.png")}
          title="Net Rental Yield"
          description="Investment Property Calculator"
        ></TouchableButton> */}
        {/* MORTGAGE CALCULATOR */}
        <TouchableButton
          onPress={() => navigation.navigate("Mortgage Calculator")}
          imgSource={require("../assets/HomeScreen/mortgage.png")}
          title="Mortgage Calculator"
          description="Find monthly mortgage payments"
        ></TouchableButton>
        {/* AREA CALCULATOR */}
        {/* <TouchableButton
          onPress={() => navigation.navigate("Price Per Area")}
          imgSource={require("../assets/HomeScreen/area.png")}
          title="Area Calculator"
          description="Price to Sqmetre/Sqfoot"
        ></TouchableButton> */}
        {/* LTV CALCULATOR */}
        <TouchableButton
          onPress={() => navigation.navigate("LTV Calculator")}
          imgSource={require("../assets/HomeScreen/affordability.png")}
          title="LTV Calculator"
          description="Loan to Value you'll have to borrow"
        ></TouchableButton>
        {/* Borrowing CALCULATOR */}
        <TouchableButton
          onPress={() => navigation.navigate("Borrowing Calculator")}
          imgSource={require("../assets/HomeScreen/mortgage.png")}
          title="Borrowing Calculator"
          description="How much mortgage I can get"
        ></TouchableButton>
        {/* Area CALCULATOR */}
        <TouchableButton
          onPress={() => navigation.navigate("Area Calculator")}
          imgSource={require("../assets/HomeScreen/area.png")}
          title="Area Calculator"
          description="Find price per m2/ft²"
        ></TouchableButton>
      </RootComponent>
    );
  }
}
