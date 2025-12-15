// Linear Search Approach: Not ideal.
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length == 1) return 0;
    for(let i = 0; i < nums.length; i++){
        if(i == 0 && nums[i] > nums[i+1]) return i;
        if(i == nums.length - 1 && nums[i] > nums[i-1]) return i;
        
        if(nums[i] > nums[i+1] && nums[i] > nums[i-1]){
            return i;
        }
    }
};

//________________________________________________________________________________________________________________________________________

// My Code - Handled edge cases manually, can be coded way better
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length == 1) return 0;

    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (m == 0 && nums[m] > nums[m + 1]) return m;
        if (m == nums.length - 1 && nums[m] > nums[m - 1]) return m;
        if (nums[m] > nums[m + 1] && nums[m] > nums[m - 1]) {
            return m;
        }
        else {
            if(nums[m] < nums[m-1]){
                r = m - 1;
            }
            else{
                l = m + 1;
            }            
        }
    }
};

// ______________________________________________________________________________________________________________________________________
var findPeakElement = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let m = Math.floor((l + r) / 2);

        if (nums[m] > nums[m + 1]) {
            r = m;  // go left (peak may be at m or to the left of the m)
        } else {
            l = m + 1;  // go right, ie, peak is on the right 
        }
    }
    return l; // or return r
};
