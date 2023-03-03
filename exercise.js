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
    if(res==false){ // first we validate if the res value is false
        for(i=0;i<numbers.length;i++){ // then we go inside this for loop
            let add = numbers[i] // we create a new variable and save the elements of the array in it
            let numbers2 = numbers; //we duplicate the input array in order to make some operations
            for(j=0;j<numbers.length;j++){
                if(i!=j){ // We do this conditional because to avoid doing operations with the same index
                    add+=numbers2[j] //we begin to make adds, adding each element with the next one and save the resultd in the variable add
                    if(add==target){ //after every adding, we verify if the result matches with the target and if its true, we change the initial res variable
                        res=true;

                    }
                }

            } 
        }
    }
    if(res==false){
        for(i=0;i<numbers.length;i++){
            let numbers2 = numbers;
            for(j=0;j<numbers.length;j++){
                if(i!=j){ 
                    add=numbers[i]+numbers2[j];//all this code is almost the same as the previous one, the difference here is that we look for the  result adding values that are not together
                    if(add==target){
                        res=true;

                    }
                }

            }
            
        }
    }
    /* Only make changes below this comment */
    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;