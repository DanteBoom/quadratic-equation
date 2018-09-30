module.exports = function solveEquation(equation) {
  let formatedString = equation.replace(new RegExp(" ",'g'),"");
  let formatedString1 = formatedString.replace("*x^2"," ");
  let formatedString2 = formatedString1.replace("*x"," ");
  let arrRealNumbers = formatedString2.split(" ");
  
  let arrResult = [];
  arrResult.push(Math.round((-arrRealNumbers[1] + Math.sqrt(Math.pow(arrRealNumbers[1],2) - 4 * arrRealNumbers[0] * arrRealNumbers[2])) / (2 * arrRealNumbers[0])));
  arrResult.push(Math.round((-arrRealNumbers[1] - Math.sqrt(Math.pow(arrRealNumbers[1],2) - 4 * arrRealNumbers[0] * arrRealNumbers[2])) / (2 * arrRealNumbers[0])));
  
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  return arrResult.sort(compareNumeric);
}
