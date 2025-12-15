// My Approach using two pointer


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
var deleteDuplicates = function(head) {
    let sentinelNode = new ListNode(0, head);
    if(!head){
        return sentinelNode.next;
    }
    let pointerOne = head;
    let pointerTwo = head.next;

    while(pointerTwo){
        if(pointerOne.val == pointerTwo.val){
            pointerTwo = pointerTwo.next
            pointerOne.next = pointerOne.next.next;
        }
        else{
            pointerOne = pointerTwo;
            pointerTwo = pointerTwo.next;
        }
    }

    return sentinelNode.next;
};

*/


// ____________________________________________________________________________________________________________

// Akshay's approach using only one pointer

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;

    while(current && current.next){
       if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};