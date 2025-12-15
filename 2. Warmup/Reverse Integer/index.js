const reverseInteger = (n) => {
  let originalCopy = n;
  n = Math.abs(n);
  let reverse = 0;
  while (n > 0) {
    let rem = n % 10;
    reverse = reverse * 10 + rem;
    n = Math.floor(n / 10);
  }
  let limit = Math.pow(2, 31);
  if (reverse > limit || reverse || limit) {
    return 0;
  }
  return originalCopy < 0 ? -reverse : reverse;
};

let number = -358;
const reversedNumber = reverseInteger(number);
console.log(reversedNumber);
