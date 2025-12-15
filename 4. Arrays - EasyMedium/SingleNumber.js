let nums = [2, 2, 1];

const singleNumber = (nums) => {
  let x = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[x]) {
      count++;
    }
  }
};

singleNumber(nums);
