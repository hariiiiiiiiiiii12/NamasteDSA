// MY APPROACH 1 - Hard coded a few not good (Essentially the same as second approach 2)


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/*
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode(0, head);
    let current = sentinel;
    let total = 0;

    while(current){
        current = current.next;
        if(!current){
            break;
        }
        total = total + 1;
    }
    if(total == n){
        sentinel.next = sentinel.next.next;
        return sentinel.next;
    }
    let previousNodeIndex = total - n;

    current = sentinel;

    if(previousNodeIndex == 0 && total == 1){
        return null;
    }
    let count = 0;
    while(current){
        current = current.next;
        if(!current){
            break;
        }
        count = count + 1;
        if(count == previousNodeIndex && current.next){
            current.next = current.next.next;
        }
    }

    return head;
};
*/

// ___________________________________________________________________________________________________________

// Akshay Approach 2:
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/*
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode(0, head);
    let current = head;
    let length = 0;

    // First Pass - Traversing the entire list to get the length of list.
    while(current){
        length++;
        current = current.next;
    }

    let previousPosition = length - n;
    let previous = sentinel;

    // Second pass - Traversing again from start to reach previous position
    for(let i = 0; i < length - n; i++){
        previous = previous.next;
    }
    previous.next = previous.next.next;

    return sentinel.next;
};
*/
// Time Complexity - O(n), Space Complexity - O(1)
// _____________________________________________________________________________________________________________


// Approach 3 - TWO PASS

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode(0, head);
    let second = sentinel; 
    let first = sentinel;

    // Moving first pointer 'n' steps ahead of second pointer
    for(let i = 0; i < n; i++){
        first = first.next;
    }

    // Move 'first' and 'second' together until 'first' reaches the end
    while(first.next){
        second = second.next;
        first = first.next;
    }

    // unlinking/deleting the node that is to be deleted/unlinked.
    second.next = second.next.next;

    return sentinel.next;
};

// Time Complexity - O(n), Space Complexity - O(1)