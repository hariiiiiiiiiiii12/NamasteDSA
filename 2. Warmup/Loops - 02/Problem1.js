// Write a function that searches for an element in an array and returns the index, if the element is not present
// return -1.

let arr = [10, 20, 30, 40, 50];
let targetElement = 50;

const returnIndexOfTargetElement = (arr, targetElement) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == targetElement) {
      elementFound = true;
      return i;
    }
  }
  return -1;
};

const result = returnIndexOfTargetElement(arr, targetElement);
console.log('Result: ', result);
