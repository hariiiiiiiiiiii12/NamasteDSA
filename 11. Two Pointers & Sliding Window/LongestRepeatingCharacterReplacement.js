// My code - Timeout issue, no test cases passed

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (str, k) {
    let i = j = 0;
    let map = {};
    let currentWindowSize = 0;
    let maxWindowSize = 0;

    while (j != str.length) {
        if (map[str[j]] === undefined) {
            map[str[j]] = 1;
        }
        else {
            map[str[j]]++;
        }
        let totalCount = 0;
        let maxCount = 0;
        for (let [key, value] of Object.entries(map)) {
            totalCount += value;
            maxCount = Math.max(value, maxCount);
        }
        if ((totalCount - maxCount) <= k) { //window is valid, expand the window from right(j)
            currentWindowSize = j - i + 1;
            maxWindowSize = Math.max(currentWindowSize, maxWindowSize);
            j++;
        }
        else { //invalid, shrink the window from left(i)
            map[str[i]]--;
            if (map[str[i]] === 0) {
                delete map[str[i]];
            }
            i++;
        }
    }
    return maxWindowSize;
}


// ________________________________________________________________________________________________________________________________________

// Akshay code 
var characterReplacement = function (str, k) {
    let i = 0
    let j = 0;
    let map = {};
    map[str[0]] = 1;
    let maxWindowSize = 0;

    while (j < str.length) {
        if(isWindowValid(map, k)){
            maxWindowSize = Math.max(maxWindowSize, j - i + 1);
            ++j;
            map[str[j]] = map[str[j]] ? ++map[str[j]] : 1;
        }
        else{
            --map[str[i]];
            ++i;
        }
    }
    return maxWindowSize;
}

const isWindowValid = (map, k) => {
    let totalCount = 0;
    let maxCount = 0;
    for(let i = 0; i < 26; i++){
        let char = String.fromCharCode(i + 65);
        if(map[char]){
            totalCount = totalCount + map[char];
            maxCount = Math.max(map[char], maxCount);
        }
    }

    return (totalCount - maxCount <= k);
}