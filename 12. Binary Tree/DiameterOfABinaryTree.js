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
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    function traverse(curr){
        if(!curr) return 0;
        let leftDepth = traverse(curr.left);
        let rightDepth = traverse(curr.right);
        let currDiameter = leftDepth + rightDepth;
        maxDiameter = Math.max(maxDiameter, currDiameter);
        return 1 + Math.max(leftDepth, rightDepth);
    }

    traverse(root);
    return maxDiameter;
};