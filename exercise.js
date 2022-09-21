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
    //We make two for loops to go through the numbers array, the first one help me to store, one number of the array
    //an make a combination with a second one to test a condition
   
    for(let i=0; i<numbers.length; i++){
        let firstN = numbers[i];
        for(let j=i+1; j<numbers.length; j++){
            let secondN = numbers[j];    
     //this the second one help me to store a second variable, and to test the condition, the sum of my numbers have to
     //be equal to the target number, if the case applied I change the state of "res" vairable to true
            if((firstN+secondN)==target){                
                res = true;                
            }
        }
    }    
    //finally we return the variable "res", it will be true or false depending the condition evaluation
    /* Only make changes below this comment */    
    return res;
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;