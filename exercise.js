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
        // take the first value in the numbers array
        const value_1 = numbers[i];
        // loop through the rest of the values
        for (let j = i+1; j < numbers.length; j++) {
            const value_2 = numbers[j];
            // add both values
            const pairSum = value_1 + value_2

            if (pairSum === target) {
                // check if the sum equals the target value
                res = true;
            } else {
                // otherwise keep looping with the next value
                continue;
            }
        }
    }
    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;