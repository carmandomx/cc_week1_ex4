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
    //Variable to store the sum
    let sum = 0;

    //For loop to iterate through the whole array
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {

            //Process to check if the positions in the array are the same
            //If not, a sum will be done and check if the sum its the same as the target value
            if (i !== j) {
                sum = numbers[i]+numbers[j]
                if (sum == target){ return res = true }
            }
           
        }
        
    }

    return res;
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;