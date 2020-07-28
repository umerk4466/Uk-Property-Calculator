import React from "react";
// import components
import RootComponent from "../components/RootComponent";
import TouchableButton from "../components/TouchableButton";

export default function HomeScreen({ navigation }) {
  return (
    <RootComponent noPadding>
      {/* ROI CALCULATOR */}
      <TouchableButton
        onPress={() => navigation.navigate("ROI Calculator")}
        imgSource={require("../assets/HomeScreen/roi.png")}
        title="ROI Calculator"
        description="Return on investment"
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
    </RootComponent>
  );
}
