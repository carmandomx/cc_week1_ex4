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
    let newNum = 0, i = 0, j = 0;
    let length = numbers.length; // Var that contains length of the string

    /* Only make changes below this comment */

    /* We use the for loop to iterate through the array. */
    for(i = 0; i < length; i++) {

        /* We use the nested for loop to compare the sum */
        for (j = 1; j < length; j++) {

            /* Sum 2 positions on the array and then assign it to a variable */
            newNum = numbers[i] + numbers[j];
            if(newNum === target) {
                return !res;
            }
        }
    }
    
    /* Only make changes below this comment */  

    /* Return false if it cannot be an integer equal to the target */
    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;