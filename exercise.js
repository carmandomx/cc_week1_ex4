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
    
    let targetVs = 0;                                                   // Variable to be used as comparator against the target.
    // let numbers = numbers;                                            // Local array of numbers provided.

    // Two for loops to match each number in the array with the other numbers. 
    for (let index = 0; index < numbers.length; index++) {
        
        const element = numbers[index];                               // Element will receive the value at each array position. 
        targetVs = element;                                             // For each number the sum starts with itself.

        for (let indexJ = 0; indexJ < numbers.length; indexJ++) {
            
            const elementJ = numbers[indexJ];                         // ElementJ will receive the value at each array position. 
            
            
            if ((index !== indexJ) &&                                   // Avoid using the same integer in comparisons. 
                (targetVs < target) &&                                  // Only sum if target it is still greater than. 
                ((targetVs + elementJ) <= target ) ) {                  // Only sum if target will be less or equal than the sum. 
                    targetVs += elementJ;                               // Sum two numbers from the array.
                }
            }           
        
        // If target was reached, return true.
        if (targetVs === target) {                                      
            res = true;
            break;
        }
        
        }

        

    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;