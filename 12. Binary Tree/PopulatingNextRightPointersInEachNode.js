// My approach
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if(!root) return root;
    let q = [root];

    while (q.length) {
        let levelSize = q.length;
        let levelArray = [];
        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift();
            if (q.length === 0) {
                curr.next = null;
                if (curr.right) {
                    curr.right.next = null;
                }
            }
            else {
                if (curr.right) {
                    curr.right.next = curr.next.left;
                }
            }
            if (curr.left) {
                curr.left.next = curr.right;
            }
            curr.left && levelArray.push(curr.left);
            curr.right && levelArray.push(curr.right);
        }
        if(levelArray.length == 0) break;
        for (let i = 0; i < levelArray.length; i++) {
            q.push(levelArray[i]);
        }
    }

    return root;

};

//_________________________________________________________________________________________________________________________________________
var connect = function(root) {
    if (!root) return root;

    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();

            // Connect to next node in the same level
            if (i < levelSize - 1) {
                curr.next = queue[0];
            } else {
                curr.next = null;       // last node
            }

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }

    return root;
};

//__________________________________________________________________________________________________________________________________________

// RECURSIVE APPROACH
var connect = function (root) {
    if (!root) return root;
    let traversal = (curr) => {
        if (curr.left) {
            curr.left.next = curr.right;
        }
        if (curr.right && curr.next) {
            curr.right.next = curr.next.left;
        }
        curr.left && traversal(curr.left);
        curr.right && traversal(curr.right);
    }
    traversal(root);
    return root;
};
