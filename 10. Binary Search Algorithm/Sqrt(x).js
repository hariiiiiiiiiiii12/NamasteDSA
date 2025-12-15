// Linear Search Approach 1

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let num = 0;
    while(num * num <= x){
        num += 1;
    }
    return num - 1;
};


// Linear Search Approach 2

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    for(let i = 0; i <= x; i++){
        if(i * i == x){
            return i;
        }
        else if(i * i < x){
            continue;
        }
        else{
            return i - 1;
        }
    }
};

// Time Complexity - O(n)


// _________________________________________________________________________________________

// Binary Search Approach
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x <= 1) return x;
    let l = 2;
    let r = Math.floor(x / 2);

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (x == m * m) {
            return m;
        }
        else if (x < m * m) {
            r = m - 1;
        }
        else {
            l = m + 1;
        }

    }

    return r;

};

// Time Complexity - O(log n)