// Top Down Approach

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
var insertIntoBST = function(root, val) {
    if (!root) return new TreeNode(val);   // Empty tree → new root

    let isInserted = false;

    function traverse(curr) {
        if (!curr || isInserted) return;

        if (val > curr.val) {
            // Insert at right leaf
            if (curr.right === null) {
                curr.right = new TreeNode(val);
                isInserted = true;
                return;
            }
            traverse(curr.right);
        } 
        else if (val < curr.val) {
            // Insert at left leaf
            if (curr.left === null) {
                curr.left = new TreeNode(val);
                isInserted = true;
                return;
            }
            traverse(curr.left);
        }
    }

    traverse(root);
    return root;
};


//__________________________________________________________________________________________________________________________________________

// BOTTOM UP: 
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
var insertIntoBST = function (root, val) {

    function traverse(curr) {
        if (!curr) return new TreeNode(val);
        
        if (val > curr.val) {
            curr.right = traverse(curr.right);
        }
        else {
            curr.left = traverse(curr.left);
        }

        return curr;
    }

    return traverse(root);
};