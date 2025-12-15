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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) return [];
    let curr = root
    let stack = [];
    let ans = [];
    let lastVisitedNode = null;

    while(curr || stack.length){

        // push all values to stack till we reach the leftmost node.
       while(curr){
        stack.push(curr);
        curr = curr.left;
       }

       let topOfStack = stack[stack.length - 1];

       // If right node to the topOfStack exists and it is not equal to lastVisitedNode, only then change curr.
       if(topOfStack.right && topOfStack.right != lastVisitedNode){
        curr = topOfStack.right;
       }
       else{
        ans.push(topOfStack.val);
        lastVisitedNode = stack.pop();
       }
    }

    return ans;
};