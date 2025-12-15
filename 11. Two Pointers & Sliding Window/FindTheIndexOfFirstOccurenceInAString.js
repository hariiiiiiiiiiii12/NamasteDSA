/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    
    for (let start = 0; start <= haystack.length - needle.length; start++) {
        let i = start; // haystack pointer
        let k = 0; // needle pointer

        while (haystack[i] == needle[k] && k < needle.length) {
            i++;
            k++;
        }

        if(k == needle.length){
            return start;
        }

    }

    return -1;
};

//n = haystack.length m = needle.length 
// Time complexity - O(n*m)
