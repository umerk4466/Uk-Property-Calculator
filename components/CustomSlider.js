import { Slider } from "react-native-elements";

// CustomSlider Component
const CustomSlider = props => {
  return <Slider value={props.value} onValueChange={props.onValueChange} />;
};
