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
var isBalanced = function(root) {

    let ans = true;

    function traverse(curr){
        if(!curr) return 0;

        let leftDepth = traverse(curr.left);
        let rightDepth = traverse(curr.right);

        if(Math.abs(leftDepth - rightDepth) > 1){
            ans = false;
        }

        return 1 + Math.max(leftDepth, rightDepth);
    }

    traverse(root);
    return ans;
    
};