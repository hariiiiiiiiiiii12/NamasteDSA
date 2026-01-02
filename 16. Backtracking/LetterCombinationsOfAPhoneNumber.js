/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let mappings = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  let result = [];

  let backtrack = (path, nextDigitIndex) => {
    if (path.length === digits.length) {
      let ans = path.join('');
      result.push(ans);
      return;
    }

    let currentDigit = digits[nextDigitIndex]; // 2, 3
    let currentWord = mappings[currentDigit]; //abc, def

    for (let i = 0; i < currentWord.length; i++) {
      path.push(currentWord[i]);
      backtrack(path, nextDigitIndex + 1);
      path.pop();
    }
  };

  backtrack([], 0);
  return result;
};



/* 

digits = "23"

backtrack([], nextIndex=0)
│
│  currentDigit = '2'
│  currentWord = "abc"
│
├── i=0 → choose 'a'
│     └── backtrack(['a'], nextIndex=1)
│         │
│         │  currentDigit = '3'
│         │  currentWord = "def"
│         │
│         ├── i=0 → choose 'd'
│         │     └── backtrack(['a','d'], nextIndex=2)
│         │           ✓ path.length == 2 → "ad"
│         │
│         ├── i=1 → choose 'e'
│         │     └── backtrack(['a','e'], nextIndex=2)
│         │           ✓ "ae"
│         │
│         └── i=2 → choose 'f'
│               └── backtrack(['a','f'], nextIndex=2)
│                     ✓ "af"
│
├── i=1 → choose 'b'
│     └── backtrack(['b'], nextIndex=1)
│         │
│         ├── i=0 → choose 'd'
│         │     └── backtrack(['b','d'], nextIndex=2)
│         │           ✓ "bd"
│         │
│         ├── i=1 → choose 'e'
│         │     └── backtrack(['b','e'], nextIndex=2)
│         │           ✓ "be"
│         │
│         └── i=2 → choose 'f'
│               └── backtrack(['b','f'], nextIndex=2)
│                     ✓ "bf"
│
└── i=2 → choose 'c'
      └── backtrack(['c'], nextIndex=1)
          │
          ├── i=0 → choose 'd'
          │     └── backtrack(['c','d'], nextIndex=2)
          │           ✓ "cd"
          │
          ├── i=1 → choose 'e'
          │     └── backtrack(['c','e'], nextIndex=2)
          │           ✓ "ce"
          │
          └── i=2 → choose 'f'
                └── backtrack(['c','f'], nextIndex=2)
                      ✓ "cf"

*/

