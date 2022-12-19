const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (myArray) {
  if (myArray.length === 0) {
    return 0;
  }
  if (myArray.length === 1) {
    return myArray[0];
  }
  let a = 0;
  for (let index = 0; index < myArray.length; index++) {
    a = a + myArray[index];
  }
  return a;
};

const multiply = function (myArray) {
  let a = myArray[0];
  for (let index = 1; index < myArray.length; index++) {
    a = a * myArray[index];
  }
  return a;
};

const power = function (a, b) {
  let c = a;
  for (let index = 1; index < b; index++) {
    a = a * c;
  }
  return a;
};

const factorial = function (a) {
  if (a === 0) {
    return 1;
  }
  let b = 1;
  for (let index = 1; index <= a; index++) {
    b = b * index;
  }
  return b;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
