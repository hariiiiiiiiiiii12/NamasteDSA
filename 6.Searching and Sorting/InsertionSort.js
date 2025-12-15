let arr = [7, 4, 3, 5, 2, 1];

const insertionSort = (arr) => {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = i;
    let previous = i - 1;

    while (arr[current] < arr[previous] && previous >= 0) {
      arr[previous + 1] = arr[previous];
      previous--;
    }

    arr[previous + 1] = current;
  }
  console.log(arr);
};

insertionSort(arr);
