// RECURSIVE APPROACH

var rightSideView = function(root) {
    let ans = [];

    function traverse(curr, level) {
        if (!curr) return;

        // First time reaching this level → this is the rightmost node
        if (level === ans.length) {
            ans.push(curr.val);
        }

        // Visit right subtree first
        traverse(curr.right, level + 1);
        traverse(curr.left, level + 1);
    }

    traverse(root, 0);
    return ans;
};

//_________________________________________________________________________________________________________________________________________

// ITERATIVE APPROACH

var rightSideView = function (root) {
    if (!root) return [];
    let ans = [];
    let q = [root];
    while (q.length) {
        let levelSize = q.length; //stores the number of nodes in the current level of the tree.
        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift();
            if (i === 0) {
                ans.push(curr.val);
            }
            curr.right && q.push(curr.right);
            curr.left && q.push(curr.left);
        }
    }
    return ans;
};