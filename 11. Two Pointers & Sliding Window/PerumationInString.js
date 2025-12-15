/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let hashW = Array(26).fill(0);
    let hashS = Array(26).fill(0);
    let windowLength = s1.length
    for(let i = 0; i < windowLength; i++){
        ++hashS[s1.charCodeAt(i) - 97];
        ++hashW[s2.charCodeAt(i) - 97];
    }

    let i = 0;
    let j = windowLength - 1;
    
    while(j < s2.length){
        if(isHashSame(hashS, hashW)){
            return true;
        }
        else{
            --hashW[s2.charCodeAt(i) - 97];
            ++i;
            ++j;
            ++hashW[s2.charCodeAt(j) - 97];
        }
    }

    return false;

    function isHashSame(hashS, hashW){
        for(let i = 0; i < 26; i++){
            if(hashS[i] !== hashW[i]){
                return false;
            }
        }
        return true;
    }
};
// T - O(n * m) where 1 <= n <= 10^4,m = 26  which is not a significant number when compared to 10^4. So, T = O(n)
// S - O(m) where m = 52


// _________________________________________________________________________________________________________________________________________
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let hashS = {};
    let hashW = {};
    let windowLength = s1.length;

    // Initialize both frequency maps
    for (let i = 0; i < windowLength; i++) {
        hashS[s1[i]] = (hashS[s1[i]] || 0) + 1;
        hashW[s2[i]] = (hashW[s2[i]] || 0) + 1;
    }

    let i = 0;
    let j = windowLength - 1;

    while (j < s2.length) {
        if (isHashSame(hashS, hashW)) {
            return true;
        } else {
            hashW[s2[i]]--;
            if (hashW[s2[i]] === 0) delete hashW[s2[i]];
            i++;
            j++;
            if (j < s2.length) {
                hashW[s2[j]] = (hashW[s2[j]] || 0) + 1;
            }
        }
    }

    return false;

    function isHashSame(obj1, obj2) {
        let keys1 = Object.keys(obj1);
        if (keys1.length !== Object.keys(obj2).length) return false;
        for (let key of keys1) {
            if (obj1[key] !== obj2[key]) return false;
        }
        return true;
    }
};
