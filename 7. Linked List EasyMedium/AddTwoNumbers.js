// My approach

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
var addTwoNumbers = function (l1, l2) {
    if (l1.val == 0 && l2.val == 0 && l1.next == null && l2.next == null) {
        let result = new ListNode();
        return result;
    }
    let sum = 0;
    let carry = 0;
    let digit = 0;
    let sentinelNode = new ListNode();
    let ans = sentinelNode;

    while ((l1 || l2 || carry)) {
        if (l1.val + l2.val + carry < 10) {
            sum = l1.val + l2.val + carry;
            digit = sum % 10
            carry = 0;
        }
        else {
            sum = l1.val + l2.val + carry;
            digit = sum % 10;
            carry = 1;
        }
        let digitNode = new ListNode(digit, null);
        ans.next = digitNode;
        ans = ans.next;
        l1 = l1.next;
        l2 = l2.next;
        if (!l1 && !l2 && carry == 0) {
            break;
        }
        if (!l1) {
            l1 = new ListNode(0, null)
        }
        if (!l2) {

            l2 = new ListNode(0, null)
        }
    }
    return sentinelNode.next;
};
*/

// _____________________________________________________________________________________________________

// Akshay's approach
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let sentinelNode = new ListNode();
    let current = sentinelNode; 
    let sum = 0;
    let carry = 0;
    while (l1 || l2 || carry){
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        let digit = sum % 10;
        carry = Math.floor(sum / 10);

        let digitNode = new ListNode(digit, null);
        current.next = digitNode;
        current = digitNode;

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return sentinelNode.next;
};