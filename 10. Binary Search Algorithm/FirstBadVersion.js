// My Code

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1;;
        let r = n;

        while(l <= r){
            let m = l + Math.floor((r - l) / 2);
            if(l == m && m == r){
                return m;
            }
            if(!isBadVersion(m)){
                l = m + 1;
            }
            else{
                r = m;
            }
                            
        }
    };
};

// _________________________________________________________________________________________________________________________________________
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1;;
        let r = n;

        while(l < r){
            let m = l + Math.floor((r - l) / 2);
            if(!isBadVersion(m)){
                l = m + 1;
            }
            else{
                r = m;
            }
                            
        }

        return l;
    };
};