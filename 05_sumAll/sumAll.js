const sumAll = function (number1, number2) {
  if (typeof number1 != "number" || typeof number2 != "number" || number1 < 0 || number2 < 0) {
    return "ERROR";
  } else if (number1 > number2) {
    let sum = number2;
    for (let index = number2; index < number1; index++) {
      sum = sum + (index + 1);
    }
    return sum;
  } else {
    let sum = number1;
    for (let index = number1; index < number2; index++) {
      sum = sum + (index + 1);
    }
    return sum;
  }
};

//sumAll(10, -4);
// Do not edit below this line
module.exports = sumAll;
