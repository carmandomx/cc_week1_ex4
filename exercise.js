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
    //Length of the array
    let len = numbers.length;
    //Verification of my target
    for(let i = 0; i<len;i++){
        for(let j = 0; j<len; j++){
            if((numbers[i] + numbers[j]) == target && (i != j)){ res = true;}
            //console.log(numbers[i], numbers[j])
        }
    }

    /*I am not sure about the answer, you ask for returning TRUE if the target number can be formed
    RESTRICTION: taking into account that you cannot repeat integers.
    In the test: expect(pairTheSum([3,3],6)).toBe(true);
    there are the same integer, so have to be FALSE and my condition in my code would be different:
            if((numbers[i] + numbers[j]) == target && (numbers[i] != numbers[j])){ res = true;}
    BUT reading the tests, I had to change the condition and I consider the instructions are wrong because 
    it is the same integer in diferent position, so ...
    the restriction it is not "taking into account that you cannot repeat integers"
    the real restriction have to be: "taking into account that the integers have to be in differents positions"
    */
    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;