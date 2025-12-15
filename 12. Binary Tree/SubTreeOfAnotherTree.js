// TOP DOWN
var isSubtree = function(root, subRoot) {

    function isSameTree(a, b) {
        if (!a && !b) return true;
        if (!a || !b) return false;
        if (a.val !== b.val) return false;
        return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
    }

    function traverse(node) {
        if (!node) return false;

        if (node.val === subRoot.val && isSameTree(node, subRoot)) {
            return true;
        }

        let left = traverse(node.left);
        let right = traverse(node.right);

        /*
        OPTIMIZED VERSION: We DO NOT call right child if left returns true (because of OR short-circuiting).

        return traverse(node.left) || traverse(node.right);
               ^ calls right ONLY IF left returned false

               This is what actually stops recursion early EFFECTIVELY.
        */

        return left || right;
    }

    return traverse(root);
};


//__________________________________________________________________________________________________________________________________________

// BOTTOM UP
var isSubtree = function (root, subRoot) {

    function isSameTree(a, b) {
        if (!a && !b) return true;
        if (!a || !b) return false;
        if (a.val !== b.val) return false;
        return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
    }

    function traverse(node) {
        if (!node) return false;

        let left = traverse(node.left);
        let right = traverse(node.right);

        // Decision happens AFTER recursion
        return left || right || isSameTree(node, subRoot);
    }

    return traverse(root);
};

//__________________________________________________________________________________________________________________________________________

// TOP DOWN - With External Variable
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(p, q) {
    let ans = false;

    function traverse(p){
        if(!p || ans){
            return;
        }

        if(p.val === q.val){
            ans = isSameTree(p, q);
        }

        traverse(p.left);
        traverse(p.right);
    }

    function isSameTree(p, q){
        if(!p && !q) return true;
        if(!p || !q) return false;
        if(p.val !== q.val) return false;

        let left = isSameTree(p.left, q.left);
        let right = isSameTree(p.right, q.right);

        return left && right;
    }

    traverse(p);
    return ans;
};
//__________________________________________________________________________________________________________________________________________

// OPTIMIZED APPROACH - SERIALIZATION

var isSubtree = function(root, subRoot) {
    let hashRoot = serialize(root);
    let hashSubRoot = serialize(subRoot);

    return hashRoot.includes(hashSubRoot);
};
let serialize = function(root) {
    let hash = "";
    let traversal = (curr) => {
        if(!curr) {
            hash = hash + "-#";
            return;
        }
        hash = hash + "-" + curr.val;
        traversal(curr.left);
        traversal(curr.right);
    }
    traversal(root);
    return hash;
} 