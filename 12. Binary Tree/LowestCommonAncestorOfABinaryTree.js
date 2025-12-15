// MY APPROACH - NOT IDEAL

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let lca = null;

  function traverse(curr, p, q) {
    if (!curr) return null;

    let left = traverse(curr.left, p, q);
    let right = traverse(curr.right, p, q);

    if (left && right && !lca) {
      lca = curr;
      return;
    }

    if (!left && !right && (curr === p || curr === q)) {
      return curr;
    }

    if (left && (left === p || left === q)) {
      if (curr && (curr === p || curr === q) && !lca) {
        lca = curr;
      } else {
        return left;
      }
    }
    if (right && (right === p || right === q)) {
      if (curr && (curr === p || curr === q) && !lca) {
        lca = curr;
      } else {
        return right;
      }
    }

    return null;
  }

  traverse(root, p, q);
  return lca;
};

//_________________________________________________________________________________________________________________________________________
// Bottom Up Approach

var lowestCommonAncestor = function (root, p, q) {
  let lca = null;

  function traverse(curr) {
    if (!curr) return 0;

    // Check left subtree
    let left = traverse(curr.left);

    // Check right subtree
    let right = traverse(curr.right);

    // Check if current node is p or q
    let mid = curr === p || curr === q;
    mid = mid == true ? 1 : 0;

    /*
            If ANY two of these three are true:
            1. mid  (current node is p or q)
            2. left (p or q found in left subtree)
            3. right (p or q found in right subtree)

            THEN this node is the LCA.
        */
    if (mid + left + right == 2 && !lca) {
      lca = curr;
    }

    // Return true if ANY of the three is true
    return mid || left || right;
  }

  traverse(root);
  return lca;
};
