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

    for(i=0; i<numbers.length; i++) { //create a for loop to iterate the elements in the array  
            for(j= i+1; j<numbers.length; j++) { //inner loop to grab two elements of the array at the same time
                if(numbers[i]+numbers[j]==target) { //if any combination of the elements of the array gives us our target, return true
                    res = true;
                }
            }
    }

    
    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;