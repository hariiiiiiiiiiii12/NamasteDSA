// My Approach:

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
var oddEvenList = function(head) {
    if(!head){
        return null;
    }
    let oddPointer = head;
    let evenPointer = head.next;
    // let sentinelNode = new ListNode(0, evenPointer)
    let evenHead = evenPointer;

    while(oddPointer && evenPointer && oddPointer.next && evenPointer.next){
        oddPointer.next = oddPointer.next.next;
        oddPointer = evenPointer.next;
        evenPointer.next = evenPointer.next.next;
        evenPointer = oddPointer.next;
    }

    oddPointer.next = evenHead;
    return head;
    

};


// Time Complexity - O(n), Space complexity - O(1)
*/
// _______________________________________________________________________________________________