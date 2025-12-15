// My Code

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while(l < r){
        let m = l + Math.floor((r - l)/2);

        if(nums[r] < nums[l] && nums[m] < nums[r]){ // nums[r] < nums[l] ---> Checking if the the array is rotated
            r = m;
        }
        else if(nums[r] > nums[l]){  // Checking the array is rotated the same number of times as the number of elements in the array, ie,
// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
            return nums[l];
        }
        else{
            l = m + 1;
        }

    }   

    return nums[l];
};