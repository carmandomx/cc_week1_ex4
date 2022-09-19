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

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (typeof numbers[i] !== "number" || typeof numbers[j] !== "number") {
        return console.warn("Please only number values in array");
      } else if (typeof target !== "number") {
        return console.warn("Please input target value");
      } else {
        let add = numbers[i] + numbers[j];
        if (add === target) {
          return true;
        }
      }
    }
  }
  /* Only make changes below this comment */
  return res;
};

console.log(pairTheSum([])); //
console.log(pairTheSum([5, 7, 2], 9)); //true
console.log(pairTheSum([2, 9, 1], 8)); //false
console.log(pairTheSum([3, 3], 6)); //true
console.log(pairTheSum([2, 11, 8, 7], 9)); //true
console.log(pairTheSum([3, 4, 5, 6], 2)); //false

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;
