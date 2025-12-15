/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    // Generating LPS array
    let i = 0;
    let j = 1;  
    let lps = [0];
    while(j < needle.length){
        if(needle[i] == needle[j]){
            lps[j] = i + 1;
            ++j;
            ++i; 
        }
        else{
            if(i == 0){
                lps[j] = 0;
                ++j;
            }
            else{
                i = lps[i-1];
            }
        }
    }

    // Checking if needle is part of haystack
    i = 0; // haystack pointer
    j = 0; // needle pointer
    while(i < haystack.length){
        if(haystack[i] == needle[j]){
            ++i;
            ++j;
        }
        else{
            if(j == 0){
                ++i;
            }
            else{
                j = lps[j-1]
            }
        }

        if(j === needle.length){
            return i - j;
        }
    }

    return -1;
};


//  n = haystack.length; m = needle.length
// Time complexity - O(m + n)
// Space complexity - O(m) // Generating LPS array of length m.