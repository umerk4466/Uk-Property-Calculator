import { number } from "yup";

// function which will convert return number of the given percentageToNum
const percentageToNum = (percent, total) => {
  let number = (percent / 100) * total;
  return parseFloat(number);
};

export default percentageToNum;
