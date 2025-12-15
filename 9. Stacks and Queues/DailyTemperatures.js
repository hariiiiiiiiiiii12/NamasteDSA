// My Code

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temp) {
  let daysMap = {};
  let stack = [];
  stack.push(temp.length - 1);
  daysMap[temp.length - 1] = 0;

  for (let i = temp.length - 2; i >= 0; i--) {
    while (stack.length) {
      let topOfStack = stack[stack.length - 1];
      if (temp[i] < temp[topOfStack]) {
        daysMap[i] = topOfStack - i;
        break;
      } else {
        stack.pop();
      }
    }
    if (stack.length == 0) {
      daysMap[i] = 0;
    }
    stack.push(i);
  }

  let answer = [];
  for (let i = 0; i < temp.length; i++) {
    answer.push(daysMap[i]);
  }

  return answer;
};

// ______________________________________________________________________________________________

// Akshay Code

var dailyTemperatures = function (arr) {
  let stack = [];
  let n = arr.length;
  let ans = Array(n).fill(0);
  ans[n - 1] = 0; // not needed as we have already filled all the array indexes with zero, but for the sake of clarity it's there

  stack.push(n - 1);  
  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] >= arr[top]) {
        // It should not just be > than but >= (CORNER CASE. DUPLICATE VALUES CAN EXIST)
        stack.pop();
      } else {
        ans[i] = top - i;
        break;
      }
    }
    if (stack.length == 0) {
      ans[i] = 0; // line 59 - 61 if block not needed as we have already filled all the array indexes with zero. But for the sake of clarity.
    }
    stack.push(i);
  }
  return ans;
};
