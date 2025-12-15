// Write a function that returns the count of digits in a number

const countDigits = (n) => {
  if (n == 0) return 1;
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  console.log(count);
};

let number = 259;
countDigits(number);
