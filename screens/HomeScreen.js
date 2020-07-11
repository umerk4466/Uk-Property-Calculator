import React from "react";
// import components
import RootComponent from "../components/RootComponent";
import TouchableButton from "../components/TouchableButton";

export default function HomeScreen({ navigation }) {
  return (
    <RootComponent noPadding>
      {/* ROI CALCULATOR */}
      <TouchableButton
        onPress={() => navigation.navigate("Roi Calculator")}
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
      {/* <TouchableButton
          onPress={() => alert("nothing added yet")}
          imgSource={require("../assets/HomeScreen/mortgage.png")}
          title="Mortgage Calculator"
          description="How much will you pay a month"
        ></TouchableButton> */}
      {/* AREA CALCULATOR */}
      {/* <TouchableButton
          onPress={() => navigation.navigate("Price Per Area")}
          imgSource={require("../assets/HomeScreen/area.png")}
          title="Area Calculator"
          description="Price to Sqmetre/Sqfoot"
        ></TouchableButton> */}
    </RootComponent>
  );
}
