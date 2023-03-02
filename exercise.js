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
    let length_numbers=numbers.length
    for (let i=0;i<length_numbers-1;i++){
        for (let j=i+1;j<length_numbers;j++){
            if (numbers[i]+numbers[j]===target){
                res = true
            }
        }
    }

    return res;
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;