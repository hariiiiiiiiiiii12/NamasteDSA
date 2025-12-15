/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let depth = 0;
    let ans = "";
    for(let i = 0; i < s.length; i++){
        if(s[i] == '('){
            depth++;
            ans += (depth > 1) ? s[i] : "";
        }
        else{
            ans += (depth > 1) ? s[i] : "";
            depth--;
        }
        
    }
    return ans;
};

// Space complexity - O(1), Time complexity - O(n)