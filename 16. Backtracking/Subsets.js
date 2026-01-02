let arr = [1, 2, 3];
var subsets = function (arr) {
  let result = [];
  let backtrack = (path, nextIndex) => {
    // result.push(path.slice(0));
    result.push([...path]);
    console.log('result: ', result);
    for (let i = nextIndex; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  };
  backtrack([], 0);
  console.log(result);
  return result;
};

subsets(arr);

// Notes - https://chatgpt.com/share/6935740d-6268-8004-9bce-1c9def24f25e

// var subsets = function (arr) {
//   let result = [];

//   let backtrack = (currentSubset, nextIndex) => {
//     // Save the subset so far
//     result.push([...currentSubset]);
//     for (let i = nextIndex; i < arr.length; i++) {
//       // Choose the element
//       currentSubset.push(arr[i]);
//       // Explore further subsets
//       backtrack(currentSubset, i + 1);
//       // Undo the choice (backtrack)
//       currentSubset.pop();
//     }
//   };

//   backtrack([], 0);
//   return result;
// };

/*

backtrack([],0)                // i = 0,1,2
├── backtrack([1],1)           // i = 1,2
│     ├── backtrack([1,2],2)   // i = 2
│     │     └── backtrack([1,2,3],3)   // no loop
│     └── backtrack([1,3],3)           // no loop
│
├── backtrack([2],2)           // i = 2
│     └── backtrack([2,3],3)           // no loop
│
└── backtrack([3],3)           // no loop


CALL STACKS ONLY:
backtrack([],0)
  i=0 → backtrack([1],1)
      i=1 → backtrack([1,2],2)
            i=2 → backtrack([1,2,3],3)
      i=2 → backtrack([1,3],3)

  i=1 → backtrack([2],2)
      i=2 → backtrack([2,3],3)

  i=2 → backtrack([3],3)

*/
