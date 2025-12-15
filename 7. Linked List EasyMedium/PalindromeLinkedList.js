// APPROACH 1:

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

/*
var isPalindrome = function(head) {
    let current = head;
    let arr = [];

    while(current != null){
        arr.push(current.val);
        current = current.next;
    }

    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        if(arr[left++] != arr[right--]){
            return false;
        }
    }

    return true;
};

*/

// Approach 2:

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // Finding the middle of the LL.
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reversing LL
  let previous = null;
  let current = slow;

  while (current) {
    let nextCurrent = current.next;
    current.next = previous;
    previous = current;
    current = nextCurrent;
  }

  // Comparing 2 lists to find if it's a palindrome
  let firstList = head;
  let secondList = previous;

  while (secondList) {
    if (firstList.val != secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }

  return true;
};


// Time Complexity - O(n), Space Complexity - O(1)