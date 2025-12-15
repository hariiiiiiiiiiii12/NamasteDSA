/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (nums, k, x) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        // if(Math.abs(nums[m] - x) > Math.abs(nums[m+k] - x)){ // Math.abs not working when m + k exceeds the length of array
        if (nums[m+k] - x < x - nums[m]) {
            l = m + 1;
        }
        else {
            r = m;
        }
    }

    return nums.slice(l, l + k);
};

//________________________________________________________________________________________________________________________________________

// Alternate using Math.abs
var findClosestElements = function (nums, k, x) {
    let l = 0;
    let r = nums.length - k;

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (Math.abs(nums[m] - x) > Math.abs(nums[m + k] - x)) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    return nums.slice(l, l + k);
};
