var partitionLabels = function (s) {
  let last = {}; //last position where a particular character is present
  let ans = [];

  for (let i = 0; i < s.length; i++) {
    last[s[i]] = i;
  }

  let start = (end = 0);
  for (let i = 0; i < s.length; i++) {
    end = Math.max(last[s[i]], end);

    // cutting the partition once it reaches end
    if (i === end) {
      ans.push(end - start + 1);
      start = i + 1; // Move start to next index for a new partition
    }
  }

  return ans;
};
