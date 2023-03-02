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
    for (let i = 0; i < numbers.length; i++){ //Iterating the first element
        for (let j = i + 1; j < numbers.length; j++) {//Iterating the second adjacent element
           switch (res) {
            case false: {
                if (numbers[i] + numbers[j] === target){//comparing with the target
                    return res = true;
                    break;
            }
        }
            case false: {
            if (Math.abs(numbers[i] - numbers[j]) === target){//comparing with the target
                return res = true;
                break;
            }
        }
            case false: {
                if (numbers[i] * numbers[j] === target){//comparing with the target
                return res = true;
                break;
             }
        }
            case false: {
             if (numbers[i] / numbers[j] === target){//comparing with the target
             return res = true;
             break;
            }
            else if (numbers[j] / numbers[i] === target){
                return res = true;
                break;
            }
        }

           default: res = false
            }
        }
    }
    /* Only make changes below this comment */

    return res;
}


num1 = [1, 2, 3]//sum
num2 = [3, 5, 7]//sust
num3 = [2, 4, 8] //div
num4 = [2, 10]//mul

console.log(pairTheSum(num1, 5))//true
console.log(pairTheSum(num2, 2))
console.log(pairTheSum(num3, 0.5))
console.log(pairTheSum(num4, 20))
/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;