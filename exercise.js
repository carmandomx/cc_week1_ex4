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
    for (let i = 0; i < numbers.length - 1; i++) {      //Create a For loop that starts on 0 (first number) and goes over all the numbers 
        for (let j = i + 1; j < numbers.length; j++) {  //Create another For loop that starts ahead of the first number (i + 1) and goes over all the numbers as well
            //Therefore the second loop will go over the numbers while the first loop stays on the first number and so on
             if (numbers[i] + numbers[j] == target)     //Sum the current pair of numbers and compare the result to the target number
             res = true;                                //Re-assign "res" to true if the comparation returns true
        }
    }
    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;