// Find the second largest number in an array

// MY SOLUTION:
/*
let arr = [45, 10, 20, -30, 40, 50];

const secondLargestNumber = (arr) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  //return largest; 50
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

console.log(secondLargestNumber(arr));

*/

let arr = [45, 10, 20, -30, 40, 50];

const findSecondLargest = (arr) => {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && secondLargest != firstLargest) {
      secondLargest = arr[i];
    }
  }
  console.log(secondLargest);
};

findSecondLargest(arr);
