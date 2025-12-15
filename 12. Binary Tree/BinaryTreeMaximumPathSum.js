// MY APPROACH NOT IDEAL

var maxPathSum = function (root) {
  let maxPathSum = -Infinity;
  let maxSubTreeSum = -Infinity;

  function traverse(curr) {
    if (!curr) return [0, 0];

    let [previousPathSumLeft, leftOfCurrNode] = traverse(curr.left);
    let [previousPathSumRight, rightOfCurrNode] = traverse(curr.right);

    // CUT negative branches - NOT SURE WHY AND WHEN TO DO THIS
    previousPathSumLeft = Math.max(previousPathSumLeft, 0);
    previousPathSumRight = Math.max(previousPathSumRight, 0);

    // Curr node
    maxPathSum = Math.max(curr.val, maxPathSum);

    // Full path through curr
    maxPathSum = Math.max(
      curr.val + previousPathSumLeft + previousPathSumRight,
      maxPathSum
    );

    // FIXED upward path
    let newPathSum =
      curr.val + Math.max(previousPathSumLeft, previousPathSumRight);
    maxPathSum = Math.max(newPathSum, maxPathSum);

    // Subtree sum
    let newSubTreeSum = leftOfCurrNode + rightOfCurrNode + curr.val;
    maxSubTreeSum = Math.max(newSubTreeSum, maxSubTreeSum);

    return [newPathSum, curr.val];
  }

  traverse(root);
  return Math.max(maxPathSum, maxSubTreeSum);
};
