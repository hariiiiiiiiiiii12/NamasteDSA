/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let pq = new MaxPriorityQueue();

  for (let i = 0; i < stones.length; i++) {
    pq.enqueue(stones[i]);
  }

  while (pq.size() > 1) {
    let y = pq.dequeue();
    let x = pq.dequeue();
    if (y - x) {
      pq.enqueue(y - x);
    }
  }

  return pq.front() || 0;
};

// T - O(n log n); S - O(n)