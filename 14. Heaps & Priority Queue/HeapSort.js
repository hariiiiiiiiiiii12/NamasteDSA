let arr = [10, 4, 5, 1, 3];
function heapSort(arr) {
  let n = arr.length;
  // create a MaxHeap
  for (let i = n - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }
  // sort the array
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i);
  }
  return arr;
}
function heapifyDown(arr, i, n) {
  let largestIndex = i;
  let leftChildIndex = 2 * i + 1;
  let rightChildIndex = 2 * i + 2;

  if (leftChildIndex < n && arr[leftChildIndex] > arr[largestIndex]) {
    // leftChildIndex < n helps ignore leaf nodes
    largestIndex = leftChildIndex;
  }

  if (rightChildIndex < n && arr[rightChildIndex] > arr[largestIndex]) {
    largestIndex = rightChildIndex;
  }

  if (largestIndex != i) {
    [arr[i], arr[largestIndex]] = [arr[largestIndex], arr[i]];
    heapifyDown(arr, largestIndex, n);
  }
}

const sortedArray = heapSort(arr);
console.log(sortedArray);
