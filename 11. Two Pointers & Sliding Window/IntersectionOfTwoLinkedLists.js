// Two pointer Approach - 2 iterations - my code 

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
var getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;
  let m = 1; // listA size
  let n = 1; // listB size
  let diff = 0; // diff in size between listA and listB

  while (pA.next) {
    m++;
    pA = pA.next;
  }

  while (pB.next) {
    n++;
    pB = pB.next;
  }

  pA = headA;
  pB = headB;

  if (m > n) {
    // listA is longer
    diff = m - n;
    while (diff) {
      pA = pA.next;
      diff--;
    }
  } else {
    // listB is longer
    diff = n - m;
    while (diff) {
      pB = pB.next;
      diff--;
    }
  }

  if (pA == pB) return pA; // If one of the two list's head was the intersectioon point itself

  while (pA.next != pB.next) {
    pA = pA.next;
    pB = pB.next;
    if (pA.next == null || pB.next == null) {
      return null;
    }
  }

  if (pA.next) {
    pA = pA.next;
    return pA;
  }
};

// T - O(m + n), S - O(1)

//__________________________________________________________________________________________________________________________________
// My code - I dont think this is correct. Go with the classic pattern, ie, the 3rd solution(Akshay's code)
//pB only moves when pA != null. That means the two pointers are not moving in lock-step every iteration — they move at slightly different rates. This can delay when the pointers meet, and in some cases, can even cause them to skip the first intersection node (depending on the list structure). So yes — using continue does affect the other pointer.

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
var getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;

  while (pA != pB) {
    //Even if pA or pB just got reset to headA or headB, you immediately call .next on them and skip their head value.That makes your pointer “jump ahead” and potentially skip the real meeting point. So we use continue in the if blocks.
    if (pA == null) {
      pA = headB;
      continue;
    }
    if (pB == null) {
      pB = headA;
      continue;
    }
    pA = pA.next;
    pB = pB.next;
  }

  return pA;
};

// _______________________________________________________________________________________________________________________________________

// Akshay code

// Classic Pattern: - single iteration unlike solution 1

//Both pointers are always updated in every iteration
//Reset happens inside the assignment, so nothing is skipped
//Guarantees they meet at the first intersection node

let pA = headA;
let pB = headB;
while (pA !== pB) {
  pA = pA === null ? headB : pA.next;
  pB = pB === null ? headA : pB.next;
}
return pA;
