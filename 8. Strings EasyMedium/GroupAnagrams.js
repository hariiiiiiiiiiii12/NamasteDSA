// Approach 1
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let obj = {};
    // let the length of strs array be n and the length of each element in the strs array be m.
    for (let i = 0; i < strs.length; i++) { // Time Complexity - O(n)
        let sortedStr = strs[i].split('').sort().join(''); // O( m log m)
        if (obj[sortedStr]) {
            obj[sortedStr].push(strs[i]);
        }
        else {
            obj[sortedStr] = [strs[i]];
        }
    }
    return [...Object.values(obj)];
}

// Time complexity - O(n * m log m)
// Space complexity - O(n * m)
