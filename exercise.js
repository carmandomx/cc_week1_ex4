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
    
        //j is a counter to loop into the search for the number that will go backwards
        //in the second condition of the if statement
        let j = numbers.length;
        //we do a for loop to iterate "i", this is for the first condition
    for (let i = 0; i < numbers.length; i++){
        //j is going down
        j--
        
        if(numbers[i] + numbers[i+1] === target || numbers[i] + numbers[j] === target)
        {
            //if any condition is met, res = true;
            res = true;
        }
    }
    //if nothing was detected as true, just return the original answer. res = false;
    return res;

    /* Only make changes below this comment */

    return res;
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;