

// BRUTE FORCE APPROACH

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/*
var getIntersectionNode = function(headA, headB) {
    let currentA = headA;
    let currentB = headB;

    while(currentA){
        
        if(currentA == currentB){
            return currentA;
        }
        else if(currentB == null){
            currentA = currentA.next;
            currentB = headB;
        }
        else{
            currentB = currentB.next;
        }
    }

    return null;
};

Let size of List A = m & Size of List B = n.
Time Complexity = O(m*n)
Space Complexity = O(1)

*/

// ____________________________________________________________________________________________________________
// Approach 2
// Using sets

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
  
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let mySetB = new Set();

    // Put all elements of list B into set
    while(headB){
        mySetB.add(headB);
        headB = headB.next;
    }

    // Compare each element present in list A to that of all elements in list B to check if same node is present
    // in both.
    while(headA){
        if(mySetB.has(headA)){
            return headA;
        }
        headA = headA.next;
    }

    return null;

};
