/* *Instructions* 

    You will receive two arguments, the first one will be an array with a series of numbers and the second will be just a number
    this number will be called the target as you need to form that target number with the integers provided by the array.

    In summary you need to return true if the target number can be formed by the integers or false if it is impossible 
    taking into account that you cannot repeat integers.

    Good luck!

*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const pairTheSum = (numbers, target) => {
    /* Only make changes below this comment */
    let currIndex = 0; // define beginning of iteration
    const values = []; // visited values
    while (currIndex < numbers.length) {
        // max amount of iterations
        const complement = target - numbers[currIndex]; // get the value we are looking for
        if (values.includes(complement)) return true; // return true if we already have visited that value
        values.push(numbers[currIndex]); // add the curr number to the visited values
        currIndex++; // continue with next number
    }
    /* Only make changes below this comment */

    return false;
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;
