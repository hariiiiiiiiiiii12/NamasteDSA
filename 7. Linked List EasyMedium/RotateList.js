// My Approach
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/*
var rotateRight = function (head, k) {
    if (head == null || k == 0 || head.next == null) {
        return head;
    }

    for (let i = 0; i < k; i++) {
        let current = head;
        let previous = null;
        while(current){
            if(current.next == null){
                previous.next = null;
                current.next = head;
                head = current;
                break;
            }
            else{
                previous = current;
                current = current.next;
            }
        }
    }
    return head;
};

// Time complexity - O(k * n) ----> If k = 2 billion and n = 3, ~6 billion operations → way too slow.
// TIMED OUT
*/

// __________________________________________________________________________________________

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head == null || k == 0 || head.next == null) {
        return head;
    }

    let current = head;
    let length = 1;

    while (current.next) {
        length++;
        current = current.next;
    }

    k = k % length;
    if(k == 0) return head;

    // Move fast pointer K steps ahead of slow pointer
    let slow = head;
    let fast = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    // Reach Kth node from last
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }

    let newHead = slow.next;
    fast.next = head; // Making it a circular list
    slow.next = null;

    return newHead;

}

// Time Complexity - O(n), Space complexity - O(1)