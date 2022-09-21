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
    for(let i = 0; i < numbers.length; i++){  /*added a counter to go through the entirety of the array*/
        for(let j = i+1; j < numbers.length; j++){ /*continued the counter individually*/
            if(numbers[i] + numbers[j] == target){ /*sum every individual intenger in the array until it matches the target*/
                res = true; /*change the result*/
            }
        }

    }
    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;