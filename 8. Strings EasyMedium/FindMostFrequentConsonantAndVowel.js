
// Approach 1 - Using Objects


/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let map = {};
    for(let i = 0; i < s.length; i++){ // Time Complexity - O(n)
        if(map[s[i]]){
            ++map[s[i]];
        }
        else{
            map[s[i]] = 1;
        }
    }

    

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowelFrequency = 0;
    let maxConsonantFrequency = 0;
    let mapKeys = Object.keys(map);

    // No matter how large the string is, the map object can only consist of 26 keys at max.
    // Time Complexity - O(1)
    for(let i = 0; i < mapKeys.length; i++){
        if(vowels.includes(mapKeys[i])){
            maxVowelFrequency = Math.max(maxVowelFrequency, map[mapKeys[i]]);
        }
        else{
            maxConsonantFrequency = Math.max(maxConsonantFrequency, map[mapKeys[i]]);
        }
    }

    return maxVowelFrequency + maxConsonantFrequency;

};
// Space complexity - O(1), Time complexity - O(n)

// ______________________________________________________________________________

// Approach 2 - Using Maps
var maxFreqSum = function (s) {
    let map = new Map();

    // Count frequencies
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowelFrequency = 0;
    let maxConsonantFrequency = 0;

    // Iterate over Map entries
    for (let [char, freq] of map) {
        if (vowels.includes(char)) {
            maxVowelFrequency = Math.max(maxVowelFrequency, freq);
        } else {
            maxConsonantFrequency = Math.max(maxConsonantFrequency, freq);
        }
    }

    return maxVowelFrequency + maxConsonantFrequency;
};
