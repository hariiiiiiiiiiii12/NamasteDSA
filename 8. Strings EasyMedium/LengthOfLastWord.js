// My Approach
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let length = 0

    for (let i = s.length - 1; i > -1; i--) {
        if (length && s[i] == ' ') {
            return length;
        }
        else if (s[i] == ' ') {
            continue;
        }
        else if (s[i] != ' ') {
            length++;
        }
    }
    return length;
};

// ________________________________________________________________________________________________________

// Akshay's approach
/**
 * @param {string} s
 * @return {number}
 */
/*
var lengthOfLastWord = function (s) {
    let i = s.length - 1;

    while (i >= 0) {
        if (s[i] === ' ') {
            --i;
        }
        else {
            break;
        }
    }

    if(i === -1) return 0;

    let count = 0;
    while(i >= 0 && s[i] != ' '){
        ++count;
        --i;
    }

    return count;
};

// Time Complexity - O(n), Space complexity - O(1)
*/

// _____________________________________________________________________________________________________

// Approach 3
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let i = s.length - 1;
    let count = 0;
    while (i >= 0) {
        if (s[i] !== ' ') {
            ++count;
        }
        else if (count) {
            break;
        }
        --i;
    }
    return count;
};

// Time Complexity - O(n), Space complexity - O(1)