var partition = function (s) {
  let result = [];

  let isPalindrome = (substr) => {
    let i = 0;
    let j = substr.length - 1;
    
    while (i < j) {
      if (substr[i++] != substr[j--]) return false;
    }

    return true;
  };

  let backtrack = (path, remainingString) => {
    if (!remainingString.length) {
      result.push([...path]);   
    }

    for (let i = 1; i <= remainingString.length; i++) {
      let substr = remainingString.substring(0, i);
      if (!isPalindrome(substr)) continue;
      path.push(substr);
      backtrack(path, remainingString.substring(i));
      path.pop();
    }
  };
  
  backtrack([], s);
  return result;
};

//________________________________________________________________________________________________________________

/* 
backtrack([], "aab")
│
├── i = 1
│   substr = "a"        (palindrome ✓)
│   path = ["a"]
│   └── backtrack(["a"], "ab")
│       │
│       ├── i = 1
│       │   substr = "a"    (palindrome ✓)
│       │   path = ["a","a"]
│       │   └── backtrack(["a","a"], "b")
│       │       │
│       │       ├── i = 1
│       │       │   substr = "b"   (palindrome ✓)
│       │       │   path = ["a","a","b"]
│       │       │   └── backtrack(["a","a","b"], "")
│       │       │       ✓ remainingString empty
│       │       │       ✓ result.push(["a","a","b"])
│       │       │
│       │       └── backtrack returns
│       │           path.pop() → ["a","a"]
│       │
│       └── backtrack returns
│           path.pop() → ["a"]
│
│       ├── i = 2
│       │   substr = "ab"   (NOT palindrome ✗)
│       │   continue (skip)
│
└── backtrack returns
    path.pop() → []
│
├── i = 2
│   substr = "aa"       (palindrome ✓)
│   path = ["aa"]
│   └── backtrack(["aa"], "b")
│       │
│       ├── i = 1
│       │   substr = "b"   (palindrome ✓)
│       │   path = ["aa","b"]
│       │   └── backtrack(["aa","b"], "")
│       │       ✓ remainingString empty
│       │       ✓ result.push(["aa","b"])
│       │
│       └── backtrack returns
│           path.pop() → ["aa"]
│
└── backtrack returns
    path.pop() → []
│
└── i = 3
    substr = "aab"      (NOT palindrome ✗)
    continue (skip)

*/