// Write a function that returns the smallest number in an array

let arr = [10, -24, 55, 12, -56, 89];

let findSmallest = () => {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
};

console.log(findSmallest(arr));
