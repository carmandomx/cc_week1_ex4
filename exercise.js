/* *Instructions* 

    You will receive two arguments, the first one will be an array with a series of numbers and the second will be just a number
    this number will be called the target as you need to form that target number with the integers provided by the array.

    In summary you need to return true if the target number can be formed by the integers or false if it is impossible 
    taking into account that you cannot repeat integers.

    Good luck!

*/



/** DO NOT CHANGE THE FUNCTION NAME **/
const pairTheSum = (numbers, target) => {

    //Flag which indicates if theres exist a pair formed by two differents integers
    let res = false; //Default value: false

    /* Only make changes below this comment */

    // With this "for" to go over each number on the array
    for (let i = 0; i < numbers.length - 1; i++) {

        //This one will take the other number to compare
        for (let j = i + 1; j < numbers.length; j++) {

            /* Then do the sum and compares if matchs with the target */
            if (numbers[i] + numbers[j] === target) {
                
                /* Sets true the flag to indicate that exist a pair in the array
                which the resoult is the "target" number */
                res = true;
            }
            
        }
        
    }
    
    /* Only make changes below this comment */

    return res; //Returns the resoult (true / false) value
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;