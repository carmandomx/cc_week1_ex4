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
    
    let sum=0;
    if(typeof numbers === 'undefined'){  //This sectemen is used to check if the values in the funtion are defined or not, if they are not it warns the user about it
     return console.warn("put input in the function");
 }
     for(let i=0; i<numbers.length;i++){  //Here we simply use a nested for to do a sum of all values in the array between each other sort of like factorize a function
         for(let j=0; j<numbers.length;j++){
             sum=numbers[i]+numbers[j];
             if(sum===target){
                 res=true;
             }
             sum=0;
         }
     }
   


    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;