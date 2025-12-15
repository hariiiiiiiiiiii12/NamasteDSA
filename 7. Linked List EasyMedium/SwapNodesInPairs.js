// Iterative Approach
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
var swapPairs = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    let sentinelNode = new ListNode(0, head);
    // previous -> p, current -> c, next -> n
    let p = sentinelNode;
    let c = p.next;
    let n = c.next;

    while (c && n) {

        // Swapping 2 nodes at a time
        p.next = n;
        c.next = n.next;
        n.next = c;

        // Moving the 3 pointers ahead
        p = c;
        c = c.next;
        n = c && c.next
    }

    return sentinelNode.next;

};
*/

// _______________________________________________________________________________________________________

// Recursive Approach
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
var swapPairs = function (head) {
    if(!head || !head.next) return head;
    let l = head;
    let r = l.next;
    l.next = swapPairs(r.next);
    r.next = l;
    return r;
};