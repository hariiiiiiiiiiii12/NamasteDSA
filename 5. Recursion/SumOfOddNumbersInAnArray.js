let arr = [1, 2, 3, 4, 5];

const sum = (n) => {
  if ((n == 0) & (arr[0] % 2 != 0)) {
    return arr[0];
  }
  if (arr[n] % 2 == 0) {
    return 0 + sum(n - 1);
  }
  return arr[n] + sum(n - 1);
};

let result = sum(arr.length - 1);
console.log(result);
