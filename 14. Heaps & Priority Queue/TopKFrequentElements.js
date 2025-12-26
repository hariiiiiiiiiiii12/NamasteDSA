/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  let pq = new MinPriorityQueue((x) => x.freq);
  for (key in map) {
    pq.enqueue({ num: Number(key), freq: map[key] });
    if (pq.size() > k) {
      pq.dequeue();
    }
  }

  return pq.toArray().map((x) => x.num);
};

// T - O(n log k); S - O(n)
