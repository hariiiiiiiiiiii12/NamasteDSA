/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let  i = num.length - 1;
    while(i>=0){
        if(Number(num[i]) % 2 == 0){
            i--;
        }
        else{
            return num.slice(0,i+1);
        }
    }
    return ""
};