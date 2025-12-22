class MaxPriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Enqueue an item
  enqueue(value, priority) {
    this.heap.push({ value, priority });
    this.heapifyUp();
  }

  // Move new node up
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[index].priority <= this.heap[parent].priority) break;
      this.swap(index, parent);
      index = parent;
    }
  }

  // Dequeue highest-priority item
  dequeue() {
    if (this.heap.length === 0) return null;
    const max = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown();
    }
    return max;
  }

  // Restore heap downwards
  heapifyDown() {
    let currentIndex = 0;
    let length = this.heap.length;
    while (true) {
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      let largest = currentIndex;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex].priority > this.heap[largest].priority
      ) {
        largest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[right].priority > this.heap[largest].priority
      ) {
        largest = right;
      }

      if (largest === currentIndex) break;
      this.swap(currentIndex, largest);
      currentIndex = largest;
    }
  }

  // View front item
  front() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  // Is Empty?
  isEmpty() {
    return this.heap.length === 0;
  }

  // Swap Helper
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
