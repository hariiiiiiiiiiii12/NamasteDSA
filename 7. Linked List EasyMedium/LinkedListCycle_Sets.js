// MY SOLUTION - Sets Approach

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    if(head == null || head.next == null){
        return false;
    }
    let current = head;
    const mySet = new Set();

    while(current != null){
        if(mySet.has(current.next)){ // Time complexity for has() method - 0(1)
            return true;
        }
        mySet.add(current.next);
        current = current.next;
    }



    return false;
};

// Time Complexity - O(n); Space Complexity - O(n)