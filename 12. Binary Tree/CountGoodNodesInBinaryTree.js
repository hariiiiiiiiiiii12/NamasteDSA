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
var goodNodes = function(root) {
    let count = 0;

    function traverse(curr, max){
        if(!curr) return;
        
        if(curr.val >= max){
            ++count;
        }
        let currMax = Math.max(curr.val, max);
        
        traverse(curr.left, currMax);
        traverse(curr.right, currMax);
    }

    traverse(root, -Infinity);
    return count;
};