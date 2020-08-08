// function which will convert return number of the given percentageToNum
const percentageToNum = (percent, total) => {
  return ((percent / 100) * total).toFixed(2);
};

export default percentageToNum;
