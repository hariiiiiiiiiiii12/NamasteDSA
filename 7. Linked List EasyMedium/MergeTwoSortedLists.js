// My approach
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) {
        return null;
    }

    let sentinelNode = new ListNode();
    let current = sentinelNode;
    let pointer1 = list1;
    let pointer2 = list2;

    while (pointer1 || pointer2) {
        if (!pointer1 && pointer2) {
            current.next = pointer2;
            current = current.next;
            pointer2 = pointer2.next
        }
        else if (pointer1 && !pointer2) {
            current.next = pointer1;
            current = current.next;
            pointer1 = pointer1.next
        }
        if (pointer1 && pointer2) {
            if (pointer1.val < pointer2.val) {
                current.next = pointer1;
                current = current.next;
                pointer1 = pointer1.next;
            }
            else if (pointer1.val > pointer2.val || pointer1.val == pointer2.val) {
                current.next = pointer2;
                current = current.next;
                pointer2 = pointer2.next;
            }
        }
    }
    return sentinelNode.next
}

