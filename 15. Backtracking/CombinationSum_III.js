/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];
    
    let backtrack = (path, nextNumber, currentSum) => {
        if (currentSum === n && path.length === k) {
            result.push([...path]);
            return;
        }

        for (let i = nextNumber; i <= 9; i++) {
            let newSum = currentSum + i;
            if (newSum > n) continue;
            path.push(i);
            backtrack(path, i + 1, newSum);
            path.pop();
        }
    };

    backtrack([], 1, 0);
    return result;
};


/*
k = 3
n = 7

backtrack([], 1, 0)
│
├── i=1 → choose 1 → backtrack([1], 2, 1)
│     │
│     ├── i=2 → choose 2 → backtrack([1,2], 3, 3)
│     │     │
│     │     ├── i=3 → choose 3 → backtrack([1,2,3], 4, 6)
│     │     │     │
│     │     │     ├── i=4 → choose 4 → 10 > 7 (stop)
│     │     │     ├── i=5 → choose 5 → 11 > 7 (stop)
│     │     │     ├── i=6 → choose 6 → 12 > 7 (stop)
│     │     │     ├── i=7 → choose 7 → 13 > 7 (stop)
│     │     │     ├── i=8 → choose 8 → 14 > 7 (stop)
│     │     │     └── i=9 → choose 9 → 15 > 7 (stop)
│     │     │
│     │     ├── i=4 → choose 4 → backtrack([1,2,4], 5, 7)  ✓ FOUND
│     │     ├── i=5 → choose 5 → 8 > 7 (stop)
│     │     ├── i=6 → choose 6 → 9 > 7 (stop)
│     │     ├── i=7 → choose 7 → 10 > 7 (stop)
│     │     ├── i=8 → choose 8 → 11 > 7 (stop)
│     │     └── i=9 → choose 9 → 12 > 7 (stop)
│     │
│     ├── i=3 → choose 3 → backtrack([1,3], 4, 4)
│     │     │
│     │     ├── i=4 → choose 4 → backtrack([1,3,4], 5, 8)   (stop > 7)
│     │     ├── i=5 → choose 5 → 9 > 7 (stop)
│     │     ├── i=6 → choose 6 → 10 > 7 (stop)
│     │     ├── i=7 → choose 7 → 11 > 7 (stop)
│     │     ├── i=8 → choose 8 → 12 > 7 (stop)
│     │     └── i=9 → choose 9 → 13 > 7 (stop)
│     │
│     ├── i=4 → choose 4 → backtrack([1,4], 5, 5)
│     │     │
│     │     ├── i=5 → choose 5 → backtrack([1,4,5], 6, 10) (stop > 7)
│     │     ├── i=6 → choose 6 → 11 > 7 (stop)
│     │     ├── i=7 → choose 7 → 12 > 7 (stop)
│     │     ├── i=8 → choose 8 → 13 > 7 (stop)
│     │     └── i=9 → choose 9 → 14 > 7 (stop)
│     │
│     ├── i=5 → choose 5 → backtrack([1,5], 6, 6)
│     │     │
│     │     ├── i=6 → choose 6 → backtrack([1,5,6], 7, 12) (stop)
│     │     ├── i=7 → choose 7 → 13 > 7 (stop)
│     │     ├── i=8 → choose 8 → 14 > 7 (stop)
│     │     └── i=9 → choose 9 → 15 > 7 (stop)
│     │
│     ├── i=6 → choose 6 → backtrack([1,6], 7, 7)
│     │     │
│     │     ├── i=7 → choose 7 → backtrack([1,6,7], 8, 14) (stop)
│     │     ├── i=8 → choose 8 → 15 > 7 (stop)
│     │     └── i=9 → choose 9 → 16 > 7 (stop)
│     │
│     ├── i=7 → choose 7 → backtrack([1,7], 8, 8) (stop)
│     ├── i=8 → choose 8 → backtrack([1,8], 9, 9) (stop)
│     └── i=9 → choose 9 → backtrack([1,9], 10, 10) (stop)
│
├── i=2 → choose 2 → backtrack([2], 3, 2)
│     │
│     ├── i=3 → choose 3 → backtrack([2,3], 4, 5)
│     │     │
│     │     ├── i=4 → choose 4 → backtrack([2,3,4], 5, 9) (stop)
│     │     ├── i=5 → choose 5 → 10 > 7 (stop)
│     │     ├── i=6 → choose 6 → 11 > 7 (stop)
│     │     ├── i=7 → choose 7 → 12 > 7 (stop)
│     │     ├── i=8 → choose 8 → 13 > 7 (stop)
│     │     └── i=9 → choose 9 → 14 > 7 (stop)
│     │
│     ├── i=4 → choose 4 → backtrack([2,4], 5, 6)
│     │     ├── i=5 → choose 5 → backtrack([2,4,5], 6, 11) (stop)
│     │     ├── i=6 → choose 6 → 12 > 7 (stop)
│     │     ├── i=7 → choose 7 → 13 > 7 (stop)
│     │     └── i=8 → choose 8 → 14 > 7 (stop)
│     │
│     ├── i=5 → choose 5 → backtrack([2,5], 6, 7)
│     │     ├── i=6 → choose 6 → 13 > 7
│     │     ├── i=7 → choose 7 → 14 > 7
│     │     └── i=8 → choose 8 → 15 > 7
│     │
│     └── i=6 → choose 6 → backtrack([2,6], 7, 8) (stop)
│
├── i=3 → choose 3 → backtrack([3], 4, 3)
│   ... (all branches exceed 7 quickly — no valid combos)
│
├── i=4 → choose 4 → backtrack([4], 5, 4)
│   ... (all exceed 7)
│
├── i=5 → backtrack([5], 6, 5)
│   ... 
│
├── i=6 → backtrack([6], 7, 6)
│   ...
│
├── i=7 → backtrack([7], 8, 7)
│   ...
│
└── i=8, i=9 → sums exceed 7 immediately

*/