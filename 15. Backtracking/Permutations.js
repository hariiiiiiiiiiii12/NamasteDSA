/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];

  let backtrack = (path) => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!path.includes(nums[i])) {
        path.push(nums[i]);
        backtrack(path);
        path.pop();
      }
    }
  };
  backtrack([]);
  return result;
};

/*

backtrack([])                     // i = 0,1,2
├── i = 0 → backtrack([1])        // i = 0,1,2
│       ├── i = 0 (skip, 1 used)
│       ├── i = 1 → backtrack([1,2])    // i = 0,1,2
│       │       ├── i = 0 (skip)
│       │       ├── i = 1 (skip)
│       │       ├── i = 2 → backtrack([1,2,3])   // base → save [1,2,3]
│       │       └── return
│       ├── i = 2 → backtrack([1,3])    // i = 0,1,2
│       │       ├── i = 0 (skip)
│       │       ├── i = 1 → backtrack([1,3,2])   // base → save [1,3,2]
│       │       └── i = 2 (skip)
│       └── return
│
├── i = 1 → backtrack([2])        // i = 0,1,2
│       ├── i = 0 → backtrack([2,1])    // i = 0,1,2
│       │       ├── i = 0 (skip)
│       │       ├── i = 1 (skip)
│       │       ├── i = 2 → backtrack([2,1,3])   // base → save [2,1,3]
│       │       └── return
│       ├── i = 1 (skip)
│       ├── i = 2 → backtrack([2,3])    // i = 0,1,2
│       │       ├── i = 0 → backtrack([2,3,1])   // base → save [2,3,1]
│       │       ├── i = 1 (skip)
│       │       └── i = 2 (skip)
│       └── return
│
└── i = 2 → backtrack([3])        // i = 0,1,2
        ├── i = 0 → backtrack([3,1])   // i = 0,1,2
        │       ├── i = 0 (skip)
        │       ├── i = 1 → backtrack([3,1,2])   // base → save
        │       └── i = 2 (skip)
        ├── i = 1 → backtrack([3,2])   // i = 0,1,2
        │       ├── i = 0 → backtrack([3,2,1])   // base → save
        │       ├── i = 1 (skip)
        │       └── i = 2 (skip)
        └── i = 2 (skip)

*/
