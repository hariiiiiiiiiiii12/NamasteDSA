// Constructor Function
function Node(val) {
  this.val = val;
  this.next = null;
}

// Constructor Function
function MyLinkedList() {
  this.head = null; // Creating an empty Singly Linked List
  this.size = 0;
}

// addAtHead(val)
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

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

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > 0 || index < this.size) return;
  let newNode = new Node(val);

  if (index == 0) {
    this.addAtHead(val);
    return;
  } else if (index == this.size) {
    this.addToTail(val);
    return;
  } else {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.getAtIndex = function (index) {
  if (index < 0 || index >= this.size) return -1;

  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.val;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  let current = this.head;
  if (index < 0 || index >= this.size) return;
  if (index == 0) {
    this.head = null;
  } else {
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }
  this.size--;
};
