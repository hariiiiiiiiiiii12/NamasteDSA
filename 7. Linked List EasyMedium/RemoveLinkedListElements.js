
// Approach 1 - My approach

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
/*
var removeElements = function(head, val) {
      if(head == null) {
        return head;
      }
      
      // Move head to the next node if the val of head equals to val given in question
      while(head.val == val){
        head = head.next;
        if(!head){
            return head;
        }
      }

      let current = head;
      let previous = null;
      

      while(current){
        if(current.val == val){
            current = current.next;;
            previous.next = current;
        }
        else{
            let nextCurrent = current.next;
            previous = current;
            current = nextCurrent;
        }
      }
      return head;  
};

*/


// __________________________________________________________________________________________________________