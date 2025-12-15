/**
 * @param {number[]} nums
 * @return {number}
 */
var peakIndexInMountainArray = function (nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);

        if (nums[m + 1] > nums[m]) {
            l = m + 1;
        }
        else{
            r = m
        }
    }

    return l;

};