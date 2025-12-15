// My Approach:
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
var isIsomorphic = function(s, t) {
    let map = {};
    for(let i = 0; i < s.length; i++){
        if(!map[s[i]]){
            if(Object.keys(map).length == 0){
                map[s[i]] = t[i];
                continue;
            }
            for(let [key,value] of Object.entries(map)){
                if(t[i] == value){
                    return false;
                }
            }
            map[s[i]] = t[i];
        }
        else if(map[s[i]]){
            if(t[i] == map[s[i]]){
                continue;
            }
            else{
                return false;
            }
        }
    }
    return true;
};
*/
//_______________________________________________________________________________________________

// Approach 2 using 2 maps
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapST = {};
    let mapTS = {};

    for(let i = 0; i < s.length; i++){
        if(!mapST[s[i]]){
            if(mapTS[t[i]]){
                return false;
            }
            mapST[s[i]] = t[i];
            mapTS[t[i]] = s[i];
        }
        else if(mapST[s[i]]){
            //if(t[i] == mapST[s[i]]) continue;
            if(mapST[s[i]] != t[i]) return false;
        }
    }
    return true;
};