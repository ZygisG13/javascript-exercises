const fibonacci = function (member) {
  const parsed = parseInt(member);
  if (parsed === 2 || parsed === 3) {
    return 1;
  }
  if (parsed < 0) {
    return "OOPS";
  }
  let fibonacciArray = [1, 1];
  let fibNext = 0;
  for (let index = 2; index <= parsed; index++) {
    fibNext = fibonacciArray[index - 1] + fibonacciArray[index - 2];
    //console.log(fibNext);
    fibonacciArray.push(fibNext);
  }
  //console.log(fibonacciArray[parsed-1])
  return fibonacciArray[parsed - 1];
};

fibonacci(8);
// Do not edit below this line
module.exports = fibonacci;
