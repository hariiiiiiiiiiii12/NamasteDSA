/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let k = -Infinity; // k is previous interval's end time
  let removalCount = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] < k) {
      // overlapping
      ++removalCount;
    } else {
      k = intervals[i][1];
    }
  }

  return removalCount;
};
