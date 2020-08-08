// function for chenaging integer value to £ money with commas
const intToPound = (value) => {
  if (value > 0) {
    return "£" + value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  } else {
    return (
      "-£" +
      Math.abs(value)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  }
};

export default intToPound;
