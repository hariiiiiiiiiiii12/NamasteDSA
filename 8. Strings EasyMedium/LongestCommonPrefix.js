// THE CLUE FOR THIS PROBLEM IS THAT THE STRS ARRAY BEHAVES LIKE 2D ARRAY 
// ALTHOUGH IT IS 1D ARRAY ONLY, IT STILL BEHAVES LIKE 2D WHEN YOU WANT TO ACCESS INDIVIDUAL CHARACTER OF
// STRING.
/*
[
'FLOWER',
'FLOW',
'FLIGHT'
]
*/


// Approach 1
/**
 * @param {string[]} strs
 * @return {string}
 */
/*
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) {
        return "";
    }
    if (strs.length == 1) {
        return strs[0]
    }
    let longestCommonPrefix = "";
    let j = 0;
    //let toContinue = true;
    while (true) {
        for (let i = 0; i < strs.length; i++) {
            if (j >= strs[i].length) {
                return longestCommonPrefix;
            }
            if (i == strs.length - 1) {
                longestCommonPrefix += strs[i][j];
                break;
            }
            if (strs[i][j] == strs[i + 1][j]) {
                continue;
            }
            else {
                //toContinue = false;
                return longestCommonPrefix;
            }
        }
        j++;
    }
};
*/

// ____________________________________________________________________________________________________

// Approach 2 - Akshay
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
 let x = 0;
 while(x < strs[0].length){
    let ch = strs[0][x];
    for(let i = 1; i < strs.length; i++){
        if(ch != strs[i][x] || x == strs[i].length){
            return strs[0].substring(0,x);
        }
    }
    x++;
 }
 return strs[0];
};
// Time - O(s); Space - O(1)
