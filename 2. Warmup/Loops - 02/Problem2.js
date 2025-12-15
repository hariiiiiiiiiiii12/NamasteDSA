// Write a function that returns the number of negative numbers in an array

let arr = [10, 28, -8, -9, 56, 67, 43, -34, -56];

const countOfNegativeNumbersInArray = (arr) => {
  let negativeNumberCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeNumberCount++;
    }
  }
  return negativeNumberCount;
};

console.log(countOfNegativeNumbersInArray(arr));
