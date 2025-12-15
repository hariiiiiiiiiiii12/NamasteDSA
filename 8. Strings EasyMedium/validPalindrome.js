// Approach One
/**
 * @param {string} s
 * @return {boolean}
 */
/*
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let filteredString = "";
    let reverseString = "";
    for (let i = 0; i < s.length; i++){
        if(s[i].match(/[a-z0-9]/i)){
            filteredString += s[i];
            reverseString = s[i] + reverseString;
        }
    }
    return filteredString == reverseString;
};
*/
// Time complexity - O(n), Space complexity - O(n)
//__________________________________________________________________________________________________

// How can we solve without using the extra space filteredString and revereString
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (!s[i].match(/[a-z0-9]/i)) {
            ++i;
        }
        else if (!s[j].match(/[a-z0-9]/i)) {
            --j;
        }
        else if (s[i] === s[j]) {
            ++i;
            --j;
        }
        else {
            return false;
        }
    }
    return true;
};

// T - O(n), S - O(1)