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

  /* If i wanted to know if any combination of n numbers in the array matches the sum, I will need to use recursion */

  /* for loop that will check the first element of a pair */
  for (let i = 0; i < numbers.length - 1; i++) {
    /* for loop that will check the second element of a pair */
    for (let j = i + 1; j < numbers.length; j++) {
      /* if conditinal to check if matches the target */
      if (numbers[i] + numbers[j] === target) {
        /* change res value to true if one match is found */
        res = true;
      }
    }
  }

  /* Only make changes below this comment */

  return res;
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;
