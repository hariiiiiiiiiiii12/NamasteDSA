// My Approach

/**
 * @param {string} s
 * @return {boolean}
 */
/*
var isValid = function (s) {
    if(s.length <= 1) return false;
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            stack.push(s[i]);
        }
        else {
            if (stack[stack.length - 1] == '[' && s[i] == ']') {
                stack.pop();
                continue;
            }
            else if (stack[stack.length - 1] == '(' && s[i] == ')') {
                stack.pop();
                continue;
            }
            else if (stack[stack.length - 1] == '{' && s[i] == '}') {
                stack.pop();
                continue;
            }
            else{
                return false;
            }
        }
    }
    if(stack.length != 0) return false;
    return true;
}

*/
// _____________________________________________________________________________________________________

// GPT Approach

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if(s.length <= 1) return false;
    let stack = [];

    let map = {
         '}' : '{',
         ')' : '(',
         ']' : '['
    }

    for(let i = 0; i < s.length; i++){
        if('({['.includes(s[i])){
            stack.push(s[i]);
        }
        else{
            if(stack[stack.length - 1] == map[s[i]]){
                stack.pop();
                continue;
            }
            else{
                return false;
            }
        }
    }

    return stack.length == 0;
}
