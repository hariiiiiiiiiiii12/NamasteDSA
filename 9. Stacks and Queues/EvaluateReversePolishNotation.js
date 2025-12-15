
// My Approach

/**
 * @param {string[]} tokens
 * @return {number}
 */
/*
var evalRPN = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] == "+"){
            let num2 = stack.pop();
            let num1 = stack.pop();
            stack.push(num1 + num2);
        }
        else if(s[i] == "-"){
            let num2 = stack.pop();
            let num1 = stack.pop();
            stack.push(num1 - num2);
        }
        else if(s[i] == "*"){
            let num2 = stack.pop();
            let num1 = stack.pop();
            stack.push(num1 * num2);
        }
        else if(s[i] == "/"){
            let num2 = stack.pop();
            let num1 = stack.pop();
            stack.push(Math.trunc(num1/num2));
        }
        else{
            stack.push(Number(s[i]));
        }
    }
    return stack.pop()
};
*/

// __________________________________________________________________________________________

// Akshay Approach