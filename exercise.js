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
    // Let's create a for starting at 0 and increment 1 and 1 so that we can reach the length of the array
    for (let i = 0; i <= numbers.length; i++) {
        // Let's create a for starting at 0 and increment 1 and 1 so that we can reach the length of the array, this one is to compare later all 1 by 1 the elements of the same array 
        for (let j = i + 1; j <= numbers.length; j++) {
            // Now we need to compare those values, in this case each element of the second loop will be compared with the actual element of the first loop, then the first loop increments and the second loop start again, and so on. 
            // If in some point the sum of those values is equal to the target parameter, it is gonna return true
            if (numbers[i] + numbers[j] == target) {
                res = true;
            }
            // We need to compare if we are not repeating the same position of the array, if at some point they repeat themselves the sum is not going to count.
            else if (numbers[i] === numbers[j]) {
                res = false
            }
        }
    }
    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;