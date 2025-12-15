// TOP DOWN APPROACH
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    
    let maxDepth = 0;

    function traverse(curr, depth){
        maxDepth = Math.max(depth, maxDepth);
        curr.left && traverse(curr.left, depth + 1);
        curr.right && traverse(curr.right, depth + 1);
    }

    traverse(root, 1);
    return maxDepth;
};

// ________________________________________________________________________________________________________________________________________

//  BOTTOM UP APPROACH

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;

    function traverse(curr){
        if(!curr) return 0;  
        let leftMax = traverse(curr.left);
        let rightMax = traverse(curr.right);
        return 1 + Math.max(leftMax, rightMax);
    }

    return traverse(root);
};


// _________________________________________________________________________________________________________________________________________
// NOT THE IDEAL APPROACH.
// Almost the same code as level order traversal using recursive approach where the ans array should be returned in level-wise sub arrays. 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let ans = [];

    let traversal = (curr, level) => {
        if(!ans[level]) ans[level] = [];
        ans[level].push(curr.val);
        curr.left && traversal(curr.left, level + 1);
        curr.right && traversal(curr.right, level + 1);
    }
    traversal(root, 0);
    return ans.length;
};