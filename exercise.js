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
    
    //First I am sorting the values into a new array to make code more efficient in case of larger arrays
    orderedNumbers = numbers.sort();

    //I am creating a double "for in" to sum every number with the other numbers
    doubleFor:
    for(number in orderedNumbers){
        for(numberadd in orderedNumbers){
            // I sum the base number with the next numbers using the index base plus 1 (number+1) with
            //the index of the summation numbers (numberadd)
            sum = orderedNumbers[number] + orderedNumbers[parseInt(number) +1 + parseInt(numberadd)];
               //if the sum is equal to the target, the res is going to change to "true" and
               //break the two for loops with the label "doubleFor"
               if(sum == target) {
                res=true; 
                break doubleFor;
               }
               //If the sum is already greater than target, I break this "for", because if the array used is 
               //ordered there is no point in continuing, because the result will only continue to grow
               if(sum > target) break;
        }
    }
    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;