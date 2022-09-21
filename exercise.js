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

    let sumTemp; //here we are creating a variable that is going to be use for compare purposes with the target.

    /* Only make changes below this comment */
    for (let i = 0; i < numbers.length; i++) { //First of all, we need to use every single number in the array, 
                                              //so here I'm declaringa for control flow with the values required. This one for the first round of values.
       for (let j = 0; j < numbers.length; j++) { //Here is the for cicle for the second round of values
            if (i == j) { //We have to make sure we are not doing the addition of the same number in the exact same position (If the position j is the same than i we are then repeating the same position)
                 //if j equals i the flow just will continue without doing any action.
            }else{ //in the case that j is not the same as i, that means the positions in the arrray are different, so we now can make the operation.
                sumTemp = numbers[i]+numbers[j]; //Here I'm using the variable I created before, setting the addition of the first number in the positio i to the segon number in the position j of the array as the new value.
            if (sumTemp == target) { //Now I'm going to compare both values, the target value with the addition of the arrays value (sumTemp)
                res = true; //and only if the addition value equals the target value, the value of res is going to change from false to true.
            }
            //if the conditional of (if) is not true, nothing else happens and res would keep the same value declared at the begining.(false) 
            }
       } 
    }
    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;