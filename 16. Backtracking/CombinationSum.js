// My Approach

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (nums, target) {
  let result = []; 

  let backtrack = (path, nextIndex, currentSum) => {
    if (currentSum === target) {
      result.push([...path]);
      return;
    }

    for (let i = nextIndex; i < nums.length; i++) {
      let newSum = currentSum + nums[i];
      if (newSum > target) continue;
      path.push(nums[i]);
      backtrack(path, i, newSum);
      path.pop();
    }
  };

  backtrack([], 0, 0);
  return result;
};

/*
nums = [2,3,6,7]
target = 7

backtrack([], 0, 0)
│
├── i=0 choose 2 → backtrack([2], 0, 2)
│     │
│     ├── i=0 choose 2 → backtrack([2,2], 0, 4)
│     │     │
│     │     ├── i=0 choose 2 → backtrack([2,2,2], 0, 6)
│     │     │     │
│     │     │     ├── i=0 choose 2 → 8 > 7 (stop)
│     │     │     ├── i=1 choose 3 → 9 > 7 (stop)
│     │     │     ├── i=2 choose 6 → 12 > 7 (stop)
│     │     │     └── i=3 choose 7 → 13 > 7 (stop)
│     │     │
│     │     ├── i=1 choose 3 → backtrack([2,2,3],1,7)  ✓ FOUND
│     │     ├── i=2 choose 6 → 10 > 7 (stop)
│     │     └── i=3 choose 7 → 11 > 7 (stop)
│     │
│     ├── i=1 choose 3 → backtrack([2,3], 1, 5)
│     │     │
│     │     ├── i=1 choose 3 → 8 > 7 (stop)
│     │     ├── i=2 choose 6 → 11 > 7 (stop)
│     │     └── i=3 choose 7 → 12 > 7 (stop)
│     │
│     ├── i=2 choose 6 → 8 > 7 (stop)
│     └── i=3 choose 7 → 9 > 7 (stop)
│
├── i=1 choose 3 → backtrack([3], 1, 3)
│     │
│     ├── i=1 choose 3 → backtrack([3,3],1,6)
│     │     │
│     │     ├── i=1 choose 3 → 9 > 7 (stop)
│     │     ├── i=2 choose 6 → 12 > 7 (stop)
│     │     └── i=3 choose 7 → 13 > 7 (stop)
│     │
│     ├── i=2 choose 6 → 9 > 7 (stop)
│     └── i=3 choose 7 → 10 > 7 (stop)
│
├── i=2 choose 6 → backtrack([6], 2, 6)
│     │
│     ├── i=2 choose 6 → 12 > 7 (stop)
│     └── i=3 choose 7 → 13 > 7 (stop)
│
└── i=3 choose 7 → backtrack([7], 3, 7)  ✓ FOUND
*/

// _______________________________________________________________________________

// Akshay's approach
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (nums, target) {
  let result = [];

  let backtrack = (path, nextIndex, remainingSum) => {
    if (remainingSum === 0) {
      result.push([...path]);
      return;
    }

    for (let i = nextIndex; i < nums.length; i++) {
      let newRemainingSum = remainingSum - nums[i];
      if (newRemainingSum < 0) continue;
      path.push(nums[i]);
      backtrack(path, i, newRemainingSum);
      path.pop();
    }
  };

  backtrack([], 0, target);
  return result;
};

/*
backtrack([], 0, 7)
│
├── i=0 choose 2 → backtrack([2], 0, 5)
│     │
│     ├── i=0 choose 2 → backtrack([2,2], 0, 3)
│     │     │
│     │     ├── i=0 choose 2 → backtrack([2,2,2], 0, 1)
│     │     │     │
│     │     │     ├── i=0 choose 2 → -1 < 0 (stop)
│     │     │     ├── i=1 choose 3 → -2 < 0 (stop)
│     │     │     ├── i=2 choose 6 → -5 < 0 (stop)
│     │     │     └── i=3 choose 7 → -6 < 0 (stop)
│     │     │
│     │     ├── i=1 choose 3 → backtrack([2,2,3], 1, 0)  ✓ FOUND
│     │     ├── i=2 choose 6 → -3 < 0 (stop)
│     │     └── i=3 choose 7 → -4 < 0 (stop)
│     │
│     ├── i=1 choose 3 → backtrack([2,3], 1, 2)
│     │     │
│     │     ├── i=1 choose 3 → -1 < 0 (stop)
│     │     ├── i=2 choose 6 → -4 < 0 (stop)
│     │     └── i=3 choose 7 → -5 < 0 (stop)
│     │
│     ├── i=2 choose 6 → -1 < 0 (stop)
│     └── i=3 choose 7 → -2 < 0 (stop)
│
├── i=1 choose 3 → backtrack([3], 1, 4)
│     │
│     ├── i=1 choose 3 → backtrack([3,3],1,1)
│     │     │
│     │     ├── i=1 choose 3 → -2 < 0 (stop)
│     │     ├── i=2 choose 6 → -5 < 0 (stop)
│     │     └── i=3 choose 7 → -6 < 0 (stop)
│     │
│     ├── i=2 choose 6 → -2 < 0 (stop)
│     └── i=3 choose 7 → -3 < 0 (stop)
│
├── i=2 choose 6 → backtrack([6], 2, 1)
│     │
│     ├── i=2 choose 6 → -5 < 0 (stop)
│     └── i=3 choose 7 → -6 < 0 (stop)
│
└── i=3 choose 7 → backtrack([7], 3, 0)  ✓ FOUND

*/
