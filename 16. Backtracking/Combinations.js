var combine = function (n, k) {
  let result = [];
  let backtrack = (path, nextNumber) => {
    if (path.length == k) {
      result.push([...path]);
      return;
    }
    for (let i = nextNumber; i <= n; i++) {
      path.push(i);
      backtrack(path, i + 1);
      path.pop();
    }
  };
  backtrack([], 1);
  return result;
};

/*

backtrack([],1)                // i = 1,2,3,4
├── backtrack([1],2)           // i = 2,3,4
│     ├── backtrack([1,2],3)   // BASE → return (no loop)
│     ├── backtrack([1,3],4)   // BASE → return (no loop)
│     └── backtrack([1,4],5)   // BASE → return (no loop)
│
├── backtrack([2],3)           // i = 3,4
│     ├── backtrack([2,3],4)   // BASE → return
│     └── backtrack([2,4],5)   // BASE → return
│
├── backtrack([3],4)           // i = 4
│     └── backtrack([3,4],5)   // BASE → return
│
└── backtrack([4],5)           // BASE → return



CALL STACK ONLY
backtrack([],1)
  i=1 → backtrack([1],2)
          i=2 → backtrack([1,2],3)
          i=3 → backtrack([1,3],4)
          i=4 → backtrack([1,4],5)

  i=2 → backtrack([2],3)
          i=3 → backtrack([2,3],4)
          i=4 → backtrack([2,4],5)

  i=3 → backtrack([3],4)
          i=4 → backtrack([3,4],5)

  i=4 → backtrack([4],5)

*/


//See my doubt is this. I'm at f([1],2) and I have explored f([1,2],3) and then backtracked and currently back at f([1],2)