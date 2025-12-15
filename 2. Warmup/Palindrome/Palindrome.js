/*
MY SOLUTION:

const isPalindrome = (number) => {
    if (number < 0) return false;
  let originalNumber = number;
  let reverseString = '';
  while (number > 0) {
    reverseString = reverseString + (number % 10);
    number = Math.floor(number / 10);
  }
  let reverseNumber = Number(reverseString);
  console.log(reverseNumber);
  if (reverseNumber == originalNumber) return true;
  else return false;
};

let number = 101316136;
const result = isPalindrome(number);
console.log(result);

*/

const isPalindrome = (number) => {
  if (number < 0) return false;
  let originalNumber = number;
  let reverseNumber = 0;
  while (number > 0) {
    reverseNumber = 10 * reverseNumber + (number % 10);
    number = Math.floor(number / 10);
  }
  console.log(reverseNumber);
  if (reverseNumber == originalNumber) return true;
  else return false;
};

let number = 121;
const result = isPalindrome(number);
console.log(result);
