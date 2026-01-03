/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let n = intervals.length;
  let [start, end] = newInterval;
  let result = [];

  let i = 0;

  // left side non-overlapping interval
  while (i < n && intervals[i][1] < start) {
    result.push(intervals[i]);
    ++i;
  }

  // overlapping interval
  while (i < n && intervals[i][0] <= end) {
    start = Math.min(intervals[i][0], start);
    end = Math.max(intervals[i][1], end);
    ++i;
  }
  result.push([start, end]);

  // right side non-overlapping interval
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};
