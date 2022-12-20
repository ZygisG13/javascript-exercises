const palindromes = function (myString) {
  myString = myString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""); //remove puctuation
  myString = myString.toLowerCase().replace(/\s/g, ""); //remove spaces
  myStringArray = myString.split().join();
  const reverseStringArray = [...myString].reverse().join(""); //reverse myStringArray copy
  console.log(myStringArray);
  console.log(reverseStringArray);
  return myStringArray === reverseStringArray ? true : false;
};

//palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
