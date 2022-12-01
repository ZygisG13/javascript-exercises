const removeFromArray = function (array, ...elementsToRemove) {
  //console.log(elementsToRemove);
  for (let indexToRemove = 0; indexToRemove < elementsToRemove.length; indexToRemove++) {
    for (let index = 0; index < array.length; index++) {
      if (array[index] === elementsToRemove[indexToRemove]) {
        //console.log(elementsToRemove[indexToRemove]);
        removed = array.splice(index, 1);
      }
    }
  }
  return array;
};

//removeFromArray([1, 2, 2, 3, 4, 5], 1, 2, 5, 6)

// Do not edit below this line

module.exports = removeFromArray;
