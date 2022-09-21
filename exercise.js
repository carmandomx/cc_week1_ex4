
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
    let x = 0;
    /* Only make changes below this comment */
    
    while (x < numbers.length-1) { //With a while we gonna run into the each index of the array numbers
        for (let i = x+1; i < numbers.length; i++) { //We make a for to run the array always in  a different index that we are runing on the while
            if (numbers[i] == (target - numbers[x])) { // With the formula in this 'if" we found the other number that is necesary to have a True Target
                return res = true // We return true 
            }
        }
            x+=1; // If we dint found target on the index x, we go to x++;
        }

    /* Only make changes below this comment */
    return res; //Return false if the target cant be formed by the arrray´s numbers
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;

