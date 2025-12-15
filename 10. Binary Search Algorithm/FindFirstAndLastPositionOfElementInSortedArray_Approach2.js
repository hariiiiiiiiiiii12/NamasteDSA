// Greedy Approach
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let output = [-1, -1];
    
    while(l <= r){
        let m = l + Math.floor((r - l)/2);
        if(nums[m] == target){
            output[0] = m;
            r = m - 1;
        }
        else if(nums[m] < target){
            l = m + 1;
        }
        else if(nums[m] > target){
            r = m - 1;
        }
    }

    // Second half
    l = 0;
    r = nums.length - 1;
    while(l <= r){
        let m = l + Math.floor((r - l)/2);
        if(nums[m] == target){
            output[1] = m;
            l = m + 1;
        }
        else if(nums[m] < target){
            l = m + 1;
        }
        else if(nums[m] > target){
            r = m - 1;
        }
    }

    return output;
    
};