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

    //First I declare two variables to traverse the array from beginning to end and vice versa.
    let i = 0;
    let x = numbers.length - 1;

    while (i < x) { //Then I create a while loop so that I can loop through the array in both directions adding pairs in both directions.

        if (numbers[i] + numbers[x] ==  target){ //Condition determining whether the sum was found.

            res = true; //The return value is converted to true.
            break; //Exiting the loop.

        } else if (numbers[i] + numbers[x] < target){ //Condition that determines if sum is greater than target.

            i++; //I increment the value of i to obtain another array position in the next loop turn from beginning to end.

        } else{ ////Condition that determines if sum is less than target.

            x--; //Decrement to x to get another position of the array from end to beginning.
        }
    }
    
    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;