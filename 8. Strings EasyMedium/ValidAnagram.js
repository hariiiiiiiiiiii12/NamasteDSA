// Approach 1
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
var isAnagram = function(s, t) {
    let obj1 = {};
    let obj2 = {};

    for(let i = 0; i < s.length; i++){
        if(!obj1[s[i]]){
            obj1[s[i]] = 1;
        }
        else{
            obj1[s[i]] += 1;
        }
    }
    
    for(let i = 0; i < t.length; i++){
        if(!obj2[t[i]]){
            obj2[t[i]] = 1;
        }
        else{
            obj2[t[i]] += 1;
        }
    }
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if(keys1.length != keys2.length) return false;


    for(let key of keys1){
        if(obj1[key] != obj2[key]){
            return false;
        }
    }
    return true;
};
*/

// ____________________________________________________________________________________________________
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]] += 1;
        }
        else {
            obj[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (obj[t[i]]) {
            obj[t[i]] -= 1;
        }
        else if (!obj[t[i]] || obj[t[i]] < 0) {
            return false;
        }
    }

    return true;

};

// Time complexity - O(n), Space complexity - O(1) as there are only 26 alphabets and max number of keys 
// that can be present is 26