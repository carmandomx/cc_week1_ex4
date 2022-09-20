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

    //create two arrays, one for the pairs and the other one for the numbers of the array
    let pairs = [];
    let numList = [];
    //loop array
    numbers.forEach(element => {
        //store the subtraction to diff
        let diff = target - element;
        if(numList.includes(diff)){
            //if diff is in numList, add the pair to the array pairs
            pairs.push([element,diff]);
        }
        numList.push(element);
    });
    //if pairs is not empty it means it have found at least a pair so return true
    if(pairs.length>0){
        return true;
    }
    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;