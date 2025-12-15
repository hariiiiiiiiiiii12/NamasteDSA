// Brute Force Approach
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
/*
var numJewelsInStones = function(jewels, stones) {
    let result = 0;

    for(let i = 0; i < jewels.length; i++){
        for(let j = 0; j < stones.length; j++){
            if(jewels[i] == stones[j]){
                ++result;
            }
        }
    }

    return result;
};

// Time Complexity - O(m*n), Space Complexity - O(1)
*/

// ______________________________________________________________________________________________________

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let result = 0;

    let mySet = new Set();
    for(let i = 0; i < jewels.length; i++){
        mySet.add(jewels[i]);
    }

    for(let j = 0; j < stones.length; j++){
        if(mySet.has(stones[j])){
            ++result;
        }
    }

    return result;
};

/*Time Complexity: O(m + n)
(where m = jewels.length and n = stones.length).

Space Complexity: O(52) ie O(1)
Since jewels and stones consist of only English letters. 26 smallcase + 26 uppercase
*/