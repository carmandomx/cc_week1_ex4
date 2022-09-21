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
    // Declare a variable that will be used to store the sum of integers in the array
    let sum = 0;
    // Loop is evaluated one by one
    for (let i = 0; i < numbers.length; i++) {
        // Second loop is for taking a second integer and adding it to the variable "sum"
        for (let k = 0; k < numbers.length; k++) {
            // this evaluation is to make sure that we don'take the same integer that was evaluated en the first loop
            if(k != i)
            {
                // Both integers are added to the variable "sum"
                sum = numbers[i]+numbers[k];
                // Now we evaluate if the sum is equal to the target received 
                if (sum === target) { 
                    // if the condition is true, then the variable "res" will be true
                    res = true;
                    // we use it to break this loop
                    break;
                }
            }
            
        }
        // break the loop if "res" is true
        if(res === true) break;
    }
    /* Only make changes below this comment */
    // Variable "res" is returned
    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;