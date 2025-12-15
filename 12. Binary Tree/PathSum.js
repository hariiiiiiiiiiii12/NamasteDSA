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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    let ans = false;

    function traverse(curr, currsum){
        let newSum = curr.val + currsum;
        if(!curr.left && !curr.right && newSum == targetSum){ // leaf node
            ans = ans || true;
        }
        curr.left && traverse(curr.left, newSum);
        curr.right && traverse(curr.right, newSum);
    }

    traverse(root, 0);
    return ans;
};

// _________________________________________________________________________________________________________________________________________

// BOTTOM UP APPROACH
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
   
   function traverse(curr, targetSum){
    if(!curr) return false;

    if(!curr.left && !curr.right && curr.val == targetSum){
        return true;
    }

    let leftPathSum = traverse(curr.left, targetSum - curr.val);
    let rightPathSum = traverse(curr.right, targetSum - curr.val);

    return leftPathSum || rightPathSum;
   }

   return traverse(root, targetSum);

};


// _______________________________________________________________________________________________________________________________________


// UNDERSTAND THE VARIABLE SCOPES PROPERLY AND SEE WHY THE BELOW CODE IS WRONG
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let leftPathSum = false;
    let rightPathSum = false;
    function traverse(curr, targetSum) {
        if (!curr) return false;
        if (!curr.left && !curr.right && curr.val == targetSum) {
            return true;
        }
        if (!curr.left && !curr.right) return false;
        leftPathSum = curr.left && traverse(curr.left, targetSum - curr.val);
        rightPathSum = curr.right && traverse(curr.right, targetSum - curr.val);
        return leftPathSum || rightPathSum;
    }

    return traverse(root, targetSum);
    
};

// ________________________________________________________________________________________________________________________________________
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let ans = false;
    function traverse(curr, targetSum) {
      if(!curr.left && !curr.right && curr.val === targetSum){
        ans = true;
      }
      curr.left && traverse(curr.left, targetSum - curr.val);
      curr.right && traverse(curr.right, targetSum - curr.val);
    }

    traverse(root, targetSum);
    return ans

};

//________________________________________________________________________________________________________________________________________
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    function traverse(curr, targetSum) {
      if(!curr.left && !curr.right && curr.val === targetSum){
        return true;
      }
      else if(!curr.left && !curr.right && curr.val !== targetSum){
        return false;
      }
      let leftPathSum = curr.left? traverse(curr.left, targetSum - curr.val) : false;
      let rightPathSum = curr.right ? traverse(curr.right, targetSum - curr.val) : false;

      return leftPathSum || rightPathSum;
    }

    return traverse(root, targetSum);

};


