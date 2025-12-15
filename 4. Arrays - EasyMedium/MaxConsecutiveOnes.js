let arr = [1, 1, 0, 1, 1, 1];

const maxConsecutiveOnes = (arr) => {
  let currentCount = 0;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    } else {
      currentCount = 0;
    }
  }
  console.log(maxCount);
};

maxConsecutiveOnes(arr);
