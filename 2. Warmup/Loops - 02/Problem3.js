// Write a function that returns the largest number in an array

let arr = [53, 422, 214, 215, -513, 760, 66];

const returnLargestNumber = (arr) => {
  let largestNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
};

console.log(returnLargestNumber(arr));
