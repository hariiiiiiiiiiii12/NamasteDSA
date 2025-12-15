// My Approach
/**
 * @param {string} s
 * @return {number}
 */
/*
var balancedStringSplit = function (s) {
    if(s.length == 2) return 1;
    let obj = {
        'L': 0,
        'R': 0
    }
    let output = 0;

    for (let i = 0; i < s.length; i++) {
        ++obj[s[i]];

        if (obj.L == obj.R) {
            output += 1;
            obj.L = 0;
            obj.R = 0
        }
    }
    return output;
};
*/
// ______________________________________________________________________________________

// Approach 2
/**
 * @param {string} s
 * @return {number}
 */
/*
var balancedStringSplit = function (s) {
    if (s.length == 2) return 1;
    let L = 0;
    let R = 0;
    let output = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') {
            ++L;
        }
        else if (s[i] === 'R') {
            ++R;
        }
        if (L === R) {
            output += 1;
            R = L = 0;
        }
    }
    return output;
};
*/
//_____________________________________________________________________________________________________


// Approach 3

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    if (s.length == 2) return 1;
    let temp = 0;
    let output = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') {
            ++temp;
        }
        else if (s[i] === 'R') {
           --temp;
        }
        if (temp === 0) {
            output += 1;
        }
    }
    return output;
};