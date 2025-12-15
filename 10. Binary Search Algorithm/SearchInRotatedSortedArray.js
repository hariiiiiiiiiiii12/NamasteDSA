// My Code
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        if (target == nums[m]) return m;

        if (nums[m] < nums[l]) { // right sorted
            if (target > nums[m] && target <= nums[r]) {
                l = m + 1;
            }
            else {
                r = m - 1;
            }
        }
        else { // left sorted
            if (target >= nums[l] && target < nums[m]) {
                r = m - 1;
            }
            else {
                l = m + 1;
            }
        }
    }

    return -1;
};

// _____________________________________________________________________________________________________________________________

// Akshay Code
var search = function(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (target === arr[m]) {
            return m;
        }
        
        if (arr[l] <= arr[m]) {
            if (target >= arr[l] && target < arr[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (target > arr[m] && target <= arr[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return -1;
};