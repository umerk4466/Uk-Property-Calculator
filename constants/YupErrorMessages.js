import * as yup from "yup";

const YupErrorMessages = yup
  .number("Value must be a number")
  .required("Above field cannot be empty at least add £0")
  .integer("Must be an integer")
  .typeError("Please enter value again");

export default YupErrorMessages;
