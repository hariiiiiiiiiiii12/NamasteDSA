// Top down

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let ans = null;
    let isFound = false;

    function traverse(curr){
        if(!curr) return;
        if(isFound) return;

        if(curr.val == val){
            ans = curr;
            isFound = true;
            return;
        }

        if(val < curr.val){
            traverse(curr.left);
        }
        else if(val > curr.val){
            traverse(curr.right);
        }
    }

    traverse(root);

    return ans;
};

// _________________________________________________________________________________________________________________________________________

// Bottom up

var searchBST = function(root, val) {

    function traverse(curr) {
        if (!curr) return null;

        // If current node matches, return it upward
        if (curr.val === val) return curr;

        // Search left or right based on BST property
        if (val < curr.val) {
            return traverse(curr.left);   // return child's result upward
        } else {
            return traverse(curr.right);  // return child's result upward
        }
    }

    return traverse(root);
};
