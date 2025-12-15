
// My Approach
/**
 * @param {string} s
 * @return {string}
 */
/*
var removeOuterParentheses = function (s) {
    let stack = [];
    let output = "";
    for (let i = 0; i < s.length; i++) {
        if (stack.length == 0) {
            stack.push(s[i]);
            continue;
        }
        if(s[i] == ')'){
            stack.pop();
            if(stack.length == 0) continue;
            output += s[i];
        }
       if(s[i] == '(' && stack.length >= 1){
        stack.push(s[i]);
        output += s[i];
       }

    }
    return output;
};
*/

// ____________________________________________________________________________________________
// Akshay Approach

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let stack = [];
    let output = "";
    for (let i = 0; i < s.length; i++) {
        if(s[i] == '('){
            stack.push(s[i]);
            output += (stack.length > 1) ? s[i] : "";
        }
        else{
            output += (stack.length > 1) ? s[i] : "";
            stack.pop();
        }
    }
    return output;
};

// Space complexity - O(n), Time complexity - O(n)