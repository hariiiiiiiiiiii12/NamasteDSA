/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let freq = Array(26).fill(0);
  let maxTaskFrequency = 0;

  for (let i = 0; i < tasks.length; i++) {
    let curr = tasks[i].charCodeAt() - 65;
    ++freq[curr];
    maxTaskFrequency = Math.max(maxTaskFrequency, freq[curr]);
  }

  let tasksWithMaxFrequency = 0; // Count how many tasks have the maximum frequency.

  for (let i = 0; i < 26; i++) {
    if (freq[i] === maxTaskFrequency) {
      ++tasksWithMaxFrequency;
    }
  }

  let ans = (n + 1) * (maxTaskFrequency - 1) + tasksWithMaxFrequency; // Calculate minimum required intervals.

  return Math.max(ans, tasks.length); // Result must be at least the total number of tasks.
};
