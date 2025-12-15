/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (nums, target) {
    let result = [];
    nums.sort((a, b) => a - b);
    let backtrack = (path, nextIndex, currentSum) => {
        if (currentSum === target) {
            result.push([...path]);
            return;
        }

        for (let i = nextIndex; i < nums.length; i++) {
            if (i > nextIndex && nums[i] === nums[i - 1]) {
                continue;
            }
            let newSum = currentSum + nums[i];
            if (newSum > target) continue;
            path.push(nums[i]);
            backtrack(path, i + 1, newSum);
            path.pop();
        }
    };

    backtrack([], 0, 0);
    return result;
};