class MinHeap {
  // parent <= child
  constructor() {
    this.heapArray = [5, 10, 20, 30];
    //this.heapArray = [];
  }

  // Helper Functions to get child/parent for i-th node
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(val) {
    this.heapArray.push(val);
    let lastIndex = this.heapArray.length - 1;
    this.heapifyUp(lastIndex); // check inserted element with parent to check if heap property is intact.
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);
      if (this.heapArray[parentIndex] > this.heapArray[i]) {
        // If parent > child
        [this.heapArray[i], this.heapArray[parentIndex]] = [
          this.heapArray[parentIndex],
          this.heapArray[i],
        ]; // Swapping parent & child
        i = parentIndex; //After a swap, the element we are fixing has moved UP, so we must continue checking from its new position.
      } else {
        break;
      }
    }
  }

  extractMin() { //extractMin as it is min heap
    if (this.heapArray.length === 0) return null;

    let min = this.heapArray[0];
    let lastIndex = this.heapArray.length - 1;
    [this.heapArray[0], this.heapArray[lastIndex]] = [
      this.heapArray[lastIndex],
      this.heapArray[0],
    ];
    this.heapArray.pop();
    this.heapifyDown(0);
    return min;
  }

  heapifyDown(currentIndex) {
    const size = this.heapArray.length;

    let smallestIndex = currentIndex; // Assuming parent is the smallest

    const leftChildIndex = this.getLeftChildIndex(currentIndex);
    const rightChildIndex = this.getRightChildIndex(currentIndex);

    // Compare with left child
    if (
      leftChildIndex < size &&
      this.heapArray[leftChildIndex] < this.heapArray[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    // Compare with right child
    if (
      rightChildIndex < size &&
      this.heapArray[rightChildIndex] < this.heapArray[smallestIndex]
    ) {
      smallestIndex = rightChildIndex;
    }

    // If parent/currentIndex is not the smallest, swap and continue
    if (smallestIndex !== currentIndex) {
      [this.heapArray[currentIndex], this.heapArray[smallestIndex]] = [
        this.heapArray[smallestIndex],
        this.heapArray[currentIndex],
      ];
      this.heapifyDown(smallestIndex); //Why call heapifyDown with smallestIndex and not currentIndex? Because after the swap, the element that may still violate the heap property has moved to smallestIndex, not stayed at currentIndex.
    }
  }

  // peek operation
  peek() {
    if (!this.heapArray.length) return null;
    return this.heapArray[0];
  }
}

let heap = new MinHeap();
console.log(heap);

heap.insert(1);
console.log(heap);

console.log(heap.extractMin());
console.log(heap);
