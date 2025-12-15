let nums = [3, 0, 1];

const missingNumber = (nums) => {
  //   for (let i = 0; i < nums.length; i++) {
  //     sum = sum + nums[i];
  //   }
  let sumOfArray = 0;
  let total = nums.length * ((nums.length + 1) / 2);
  for (let i = 0; i < nums.length; i++) {
    sumOfArray = sumOfArray + nums[i];
  }
  return total - sumOfArray;
};
console.log(missingNumber(nums));
