// My Code
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    function traverse(curr, low, high){
        if(!curr) return true;

        if(curr.val <= low || curr.val >= high){
            return false;
        }
        let left = traverse(curr.left, low, curr.val);
        let right = traverse(curr.right, curr.val, high);

        return left && right;
    }

    return traverse(root, -Infinity, +Infinity);
};
//_________________________________________________________________________________________________________________________________________

// Akshay Code
var isValidBST = function(curr, lo = null, hi = null) {
    if (!curr) return true;
    if ((lo !== null && curr.val <= lo) || (hi !== null && curr.val >= hi)) // Check why we cant use && here
        return false;
    let isLeftBST = isValidBST(curr.left, lo, curr.val);
    let isRightBST = isValidBST(curr.right, curr.val, hi);
    return isLeftBST && isRightBST;
}