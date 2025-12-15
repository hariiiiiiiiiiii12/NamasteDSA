// Using 2 binary searches
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let output = [-1, -1];
    
    while(l < r){
        let m = l + Math.floor((r - l)/2);
        if(nums[m] == target){
            r = m;
        }
        else if(nums[m] < target){
            l = m + 1;
        }
        else if(nums[m] > target){
            r = m - 1;
        }
    }   
    if(nums[l] == target){
        output[0] = l;
    }

    // Second half
    l = 0;
    r = nums.length - 1;
    while(l < r){
        let m = l + Math.ceil((r - l)/2);
        if(nums[m] == target){
            l = m;
        }
        else if(nums[m] < target){
            l = m + 1;
        }
        else if(nums[m] > target){
            r = m - 1;
        }
    }
    if(nums[l] == target){
        output[1] = l;
    }

    return output;
    
};

// O(log n) + O(log n) for each while loop = O(2 log n) = O(log n)