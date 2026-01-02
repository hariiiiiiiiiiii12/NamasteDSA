var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0; // child pointer
  let j = 0; // cookie pointer

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      i++; // child is satisfied
    }
    j++; // always move to next cookie
  }

  return i; // number of satisfied children
};

/* 
| Aspect    | Complexity               |
| --------- | ------------------------ |
| Time      | **O(n log n + m log m)** |
| Space     | **O(1)** (auxiliary)     |
| Technique | Greedy + Two Pointers    |

*/
