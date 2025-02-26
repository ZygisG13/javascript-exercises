const findTheOldest = function(people) {
  people.forEach(element => { 
    //console.log("yearOfDeath" in element); //here another check if element exist in object
    if (element.yearOfDeath != undefined) {
      element.lives = element.yearOfDeath - element.yearOfBirth;
    }
    else {
      element.lives = new Date().getFullYear() - element.yearOfBirth;
    }

    });
  //sorting objects from oldest to youngest
  oldest = people.sort((aPerson,bPerson) => aPerson.lives < bPerson.lives ? 1 : -1)
  console.log(oldest[0]);
  return oldest[0]; //return first member of array
};

// Do not edit below this line
module.exports = findTheOldest;
