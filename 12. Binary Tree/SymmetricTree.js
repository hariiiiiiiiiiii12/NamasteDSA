// TOP DOWN APPROACH
var isSymmetric = function(root) {
    let result = true;

    function traverse(left, right){
        if(!left && !right) return;

        if(!left || !right){
            result = false;
            return;
        }

        if(left.val !== right.val){
            result = false;
            return;
        }

        traverse(left.left, right.right);
        traverse(left.right, right.left);
    }

    traverse(root.left, root.right);
    return result;
};


// _________________________________________________________________________________________________________________________________________

// BOTTOM UP APPROACH
var isSymmetric = function(root) {
  let isMirror = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;

    let sameValue = left.val === right.val;

    let outerMirror = isMirror(left.left, right.right);
    let innerMirror = isMirror(left.right, right.left);

    return sameValue && outerMirror && innerMirror;
  };

  return isMirror(root.left, root.right);
};

// _________________________________________________________________________________________________________________________________________

// Iterative approach
var isSymmetric = function(root) {
        let q = [root.left, root.right]; // Queue is used as it is a level order traversal that we are doing.
        while(q.length) {
            let p1 = q.shift();
            let p2 = q.shift();
            if(!p1 && !p2) continue;
            if(!p1 || !p2) return false;
            if(p1.val != p2.val) return false;
            q.push(p1.left, p2.right);  // pushing the children
            q.push(p1.right, p2.left);  // pushing the children
        }
        return true;
};

// _________________________________________________________________________________________________________________________________________
var isSymmetric = function (root) {

    function traverse(left, right) {

        if(!left && !right) return true;

        if(!left || !right) return false;

        if(left.val != right.val) return false;

        let leftSide = traverse(left.left, right.right);
        let rightSide = traverse(left.right, right.left);

        return leftSide && rightSide;
    }

    return traverse(root.left, root.right);
};
