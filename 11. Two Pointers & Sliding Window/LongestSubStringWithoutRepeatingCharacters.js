// Not fully working
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    let map = {};
    let currentLength = 0;
    let maxLength = false;

    for(let i = 0; i < str.length; i++){
        if(map[str[i]]){
            maxLength = currentLength > maxLength ? currentLength : maxLength;
            currentLength = 0;
            for(let key in map){
                map[key] = false;
            }
            map[str[i]] = 1;
            currentLength++;

        }
        else{
            map[str[i]] = 1;
            currentLength++;
        }
    }

    if(maxLength && maxLength > currentLength){
        return maxLength;
    }
    else{
        return currentLength;
    }
};

//__________________________________________________________________________________________________________________________________________

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
    let map = {};
    let currentLength = 0;
    let maxLength = 0;
    let j = 0;
    let i = 0;

    while (j != str.length) {
        if (map[str[j]] !== undefined && map[str[j]] >= i) { //If the character at j is already seen and the last seen position of that character is inside the current window.Check using !== undefined instead of relying on truthiness. map[str[j]] might be 0 which is falsy. So if (map[str[j]]) says it was not seen Even though it was seen at index 0 Using !== undefined checks properly.
            i = map[str[j]] + 1; //Move the left pointer to one position after the last seen index
        }
        map[str[j]] = j;
        currentLength = j - i + 1;
        j++;

        maxLength = currentLength > maxLength ? currentLength : maxLength;
    }

    return maxLength;
};

// T - O(n)
// S - O(1) => str consists of English letters, digits, symbols and spaces, ie, 52 alphabets(lowercase, uppercase) + 10(digits) + Symbols + space, ie, some constant number of characters