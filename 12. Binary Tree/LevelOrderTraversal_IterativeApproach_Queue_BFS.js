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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    let queue = [root];
    let ans = [];

    while (queue.length) {
        let levelArray = [];
        let levelSize = queue.length; // no of nodes in a particular level

        for(let i = 0; i < levelSize; i++){
            let curr = queue.shift();
            levelArray.push(curr.val);
            curr.left && queue.push(curr.left);
            curr.right && queue.push(curr.right);
        }

        ans.push(levelArray);
    }

    return ans;
};