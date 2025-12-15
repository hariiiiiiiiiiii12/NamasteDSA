/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let ans = [];
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            twoSum(nums, i, ans);
        }
    }

    return ans;
};

const twoSum = (nums, i, ans) => {
    let x = i + 1;
    let y = nums.length - 1;
    let target = 0;

    while (x < y) {
        if ( nums[i] + nums[x] + nums[y] == target) {
            ans.push([nums[i], nums[x], nums[y]]);
            x++;
            y--;

            while(x < y && nums[x] == nums[x-1]) x++;
            while(x < y && nums[y] == nums[y+1]) y--;
        }
        else if (nums[i] + nums[x] + nums[y] > target) {
            y--;
        }
        else {
            x++;
        }
    }
}

// T - O(n^2)