// GPT approach

var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);   // 1️⃣ sort
    let result = [];
    let used = new Array(nums.length).fill(false);

    let backtrack = (path) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {

            // 2️⃣ skip used elements
            if (used[i]) continue;

            // 3️⃣ skip duplicates at same level
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            used[i] = true;
            path.push(nums[i]);

            backtrack(path);

            path.pop();
            used[i] = false;
        }
    };

    backtrack([]);
    return result;
};

// ______________________________________________________________________________________________________________

// Akshay Approach
var permuteUnique = function (arr) {
    let result = [];
    arr.sort((a, b) => (a - b));

    let backtrack = (path, nums) => {
        if (path.length === arr.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            path.push(nums[i]);
            backtrack(
                path,
                [...nums.slice(0, i), ...nums.slice(i + 1)]
            );
            path.pop();
        }
    };

    backtrack([], arr);
    return result;
};

/* 
backtrack(path=[], nums=[1a,1b,2])
│
├── i=0 → choose 1a
│   │
│   └── backtrack(path=[1a], nums=[1b,2])
│       │
│       ├── i=0 → choose 1b
│       │   │
│       │   └── backtrack(path=[1a,1b], nums=[2])
│       │       │
│       │       └── i=0 → choose 2
│       │           │
│       │           └── backtrack(path=[1a,1b,2], nums=[])
│       │               ✓ permutation saved
│       │
│       └── i=1 → choose 2
│           │
│           └── backtrack(path=[1a,2], nums=[1b])
│               │
│               └── i=0 → choose 1b
│                   │
│                   └── backtrack(path=[1a,2,1b], nums=[])
│                       ✓ permutation saved
│
├── i=1 → skip
│   (nums[1] === nums[0] → duplicate at same level)
│
└── i=2 → choose 2
    │
    └── backtrack(path=[2], nums=[1a,1b])
        │
        ├── i=0 → choose 1a
        │   │
        │   └── backtrack(path=[2,1a], nums=[1b])
        │       │
        │       └── i=0 → choose 1b
        │           │
        │           └── backtrack(path=[2,1a,1b], nums=[])
        │               ✓ permutation saved
        │
        └── i=1 → skip
            (duplicate 1b at same level)

*/
