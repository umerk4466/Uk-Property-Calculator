// function for chenaging integer value to £ money with commas
const intToPound = (value) => {
  return "£" + value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export default intToPound;
