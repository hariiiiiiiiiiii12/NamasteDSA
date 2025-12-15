/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    function traverse(curr1, curr2){
        if(!curr1 && !curr2) return true;
        if(!curr1 || !curr2) return false;
        return curr1.val === curr2.val && traverse(curr1.left, curr2.left) && traverse(curr1.right, curr2.right);
    }

    return traverse(p, q);
};

// _________________________________________________________________________________________________________________________________________
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let ans = true;
    function traverse(curr1, curr2){
        if(!curr1 && !curr2){
            return ans;
        }
        if(!curr1 || !curr2){
             ans = false;
             return ans;
        }
        if(curr1.val != curr2.val){
            ans = false;
            return ans;
        }
        traverse(curr1.left, curr2.left);  
        traverse(curr1.right, curr2.right);
    }

   traverse(p, q);
   return ans;
};