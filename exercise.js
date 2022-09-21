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
    let map = new Map(); // I decided i needed to previsualize what was going on to keep track of my mistakes so I created a new object
    for (let i = 0; i < numbers.length; i++) { //I first started the for loop to check the numbers in the array
        let num1 = numbers[i]; // created a new variable with the index of the array
        let num2 = target - num1; // here is the important part, the program will be tasked to find the number remaining by substracting the target from the current position
        if (map.has(num2)) { // this condition will  allow us to know if the remaining pair of the sum exists in the array
            return res = true; // then the result will be true
        }
        map.set(num1, i); // the program will continously look for the the second pair, but will store the value of the first pair to no loop indeterminately
    }
    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;