/* *Instructions* 

    You will receive two arguments, the first one will be an array with a series of numbers and the second will be just a number
    this number will be called the target as you need to form that target number with the integers provided by the array.

    In summary you need to return true if the target number can be formed by the integers or false if it is impossible 
    taking into account that you cannot repeat integers.

    Good luck!

*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const pairTheSum = (numbers, target) => {
  let res = false;
  /* Only make changes below this comment */

  //We need input a true value for numbers (array) and target. If that its falsy we return a warning.
  if (!numbers || !target) {
    return "Please input any array or target values";
  } else if (!Array.isArray(numbers)) {
    //We need assure that "numbers" be a array, if not another message.
    return "Input a array of numbers";
  } else {
    //now for truthy values we need iterate "numbers" array per index values.
    for (let i = 0; i < numbers.length; i++) {
      //iteration 1 from i=0.
      for (let j = 1; j < numbers.length; j++) {
        //iteration 2 from j=1 (or i+1).
        if (typeof numbers[i] !== "number" || typeof numbers[j] !== "number") {
          //validation for elements from array (i, j) to need be numbers.
          return "Please only number values in array";
        } else if (typeof target !== "number") {
          //only number for "target" value or we send a message.
          return "Please input target value";
        } else {
          //Now we add value per index ("add" variable) and comparate it (strict equality) with target value, if that is True, return it as "True", that means we found a match "add" and "target".
          let add = numbers[i] + numbers[j];
          if (add === target) {
            return (res = true);
          }
        }
      }
    }
  }
  //If we close cycle without a true answer return "res" default value.
  /* Only make changes below this comment */
  return res;
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;
