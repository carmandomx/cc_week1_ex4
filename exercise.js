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
    let res = false;
    const n = numbers.length;
    // Search with nested loop if there are elements in the array that can be addends of the target
    for (let i = 0; i < n; i++){
        for (let j = i + 1; j < n; j++){
            if (numbers[i] + numbers[j] == target)
            res=true
        }
        
    }

    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;