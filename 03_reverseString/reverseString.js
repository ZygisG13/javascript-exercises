const reverseString = function(string) {
    let stringArray = string.split("");
    let reverseString = ''
    for (let index = stringArray.length; index > 0; index--) {
        reverseString += stringArray.pop();
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
