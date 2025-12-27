/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let n = matrix[0].length;

  let pq = new MinPriorityQueue((x) => x.num);

  // pushing the first value of each row in pq.
  for (let i = 0; i < n; i++) {
    pq.enqueue({ num: matrix[i][0], row: i, col: 0 });
  }

  // Removing the smallest element until count becomes k.
  for (let count = 0; count < k - 1; count++) {
    let { num, row, col } = pq.dequeue();

    // add the next element in the same row only if it is present
    if (col + 1 < n) {
      pq.enqueue({ num: matrix[row][col + 1], row: row, col: col + 1 });
    }
  }

  return pq.dequeue().num;
};


// T - O(k log n); S - O(n)