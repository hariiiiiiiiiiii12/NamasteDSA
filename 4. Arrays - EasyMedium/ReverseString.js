let s = ['h', 'e', 'l', 'l', 'o', 'z'];

const reverseString = (arr) => {
  let x = 0;
  for (let i = arr.length - 1; i >= Math.floor(arr.length/2); i--) {
    let temp = arr[x];
    arr[x] = arr[i];
    arr[i] = temp;
    x = x + 1;
  }
  console.log(arr);
};

reverseString(s);
