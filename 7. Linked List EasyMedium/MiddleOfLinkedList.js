/*
LOCAL SYSTEM APPROACH

function Node(val) {
  this.val = val;
  this.next = null;
}

// Constructor Function
function MyLinkedList() {
  this.head = null; // Creating an empty Singly Linked List
  this.size = 0;
}

MyLinkedList.prototype.addToTail = function (val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    let newNode = new Node(val);
    current.next = newNode;
  }
  this.size++;
};
const list = new MyLinkedList();
list.addToTail(10);
list.addToTail(20);
list.addToTail(30);
list.addToTail(40);
list.addToTail(50);
// list.addToTail(60);

// console.log(list);

let current = list.head;
let arr = [];
for (let i = 0; i < list.size; i++) {
  arr.push(current.val);
  console.log(current);
  current = current.next;
}
let mid = Math.floor(arr.length / 2);
console.log(arr[mid]);

*/

// _________________________________________________________________________________________________________


// LEET CODE APPROACH 1

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
var middleNode = function(head) {
    let current = head;
    let arr = [];
    while(current != null){
        arr.push(current);
        current = current.next;
    }

    return arr[Math.floor(arr.length/2)];
};


// _________________________________________________________________________________________

// APPROACH 3 - SLOW FAST POINTERS APPROACH

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
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast.next != null && fast.next.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast.next == null){
        return slow
    }
    else{
        slow = slow.next;
        return slow;
    }
}; 

