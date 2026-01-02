var subsetsWithDup = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  let backtrack = (path, nextIndex) => {
    result.push([...path]);
    for (let i = nextIndex; i < nums.length; i++) {
      if (i > nextIndex && nums[i - 1] === nums[i]) {
        continue; // Skip backtracking
      }

      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  };
  backtrack([], 0);
  return result;
};
