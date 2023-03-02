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
    if(res==false){
        for(i=0;i<numbers.length;i++){
            add = numbers[i]
            let numbers2 = numbers;
            for(j=0;j<numbers.length;j++){
                if(i!=j){ 
                    add+=numbers2[j]
                    if(add==target){
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
                    add=numbers[i]+numbers2[j];
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