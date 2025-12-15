// My code
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;
    while(i < s.length && j <= t.length){
        if(j == t.length){
            return false;
        }
        if(s[i] == t[j]) i++;
        j++;
    }
    return true;
};

// ________________________________________________________________________________________________________________________________________
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;
    while(i < s.length && j < t.length){
        if(s[i] == t[j]) i++;
        j++;
    }
    return i === s.length;
};