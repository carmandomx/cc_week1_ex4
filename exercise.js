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

    /* Decided to try to test for longer and more complex arrays*/

    //All the index we need for the different searches we need to make
    let scIn = 0;
    let tempinc = 0;
    let sumtemp = 0;
    let k= 0;

    //Start of the process
    for(let i = 0; i < numbers.length-1; i++){
        /*This only exist to prove the absolute easier posibility of 2 numbers getting the target
        This is done by comparing the current number with every possible subsequent number*/ 
        for(let z = i; z < numbers.length; z++){
            if((numbers[i] + numbers[z+1]) === target){
                res = true;
                break;
            }
        }
        //Now we start the "fun" part

        /*First we need to check if all the previous minimum amount of additions failed
        For that we will use scIn as a control value that tells us the current amount of numbers being added*/
        if((i+scIn+1) === numbers.length-1 && scIn < numbers.length - 1){
            sumtemp = 0;
            scIn++;
            //here we do the first addition of the current minimun number of additions
            for(let j = 0; j <= scIn; j ++){
                sumtemp = sumtemp + numbers[j];
            }
            //here we check if that was enough or if adding every number fails
            if(sumtemp === target){
                res = true;
                break;
            }else if(scIn === numbers.length-1){
                break;
            }
            //We need to restart the index to check with the new scIn
            i = -1;
        /*Now we need to check if the previous condition passed but the target wasn't reached yet */
        }else if(sumtemp > 0){
            /* Now we need to do what we did in the previous condition but starting at the next
            position and if that fails, starting at the next one and so on until is no longer possible*/
            for (let index = scIn; index < numbers.length; index++) {
                //This if checks if the target can be reached with the current first possition...
                if(sumtemp + numbers[index] === target){
                    res = true;
                    break;
                //otherwise, we make a new starting position
                }else if(index+1 === numbers.length && tempinc < numbers.length){
                    tempinc++;
                    k++;
                    sumtemp = 0;
                    for(let l = k; l <= i+tempinc+1; l++){
                        if(k > numbers.length-1){
                            break;
                        }
                        sumtemp = sumtemp + numbers[l];
                    }
                    index = k+1;
                }                
            }
            //If that fails, we need to start over expecting a new amount of numbers that can be added
            sumtemp = 0
            i = - 1;            
        }
    }
    //The return below is unreachable but for the sake of not having extra problems im leaving it there
    /* Only make changes below this comment */

    return res;
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;