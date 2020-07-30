// function for chenaging integer value to £ money with commas
const intToPound = (value) => {
  return value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};

export default intToPound;
