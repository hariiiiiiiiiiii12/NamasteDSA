// This is not an efficient way to implement a priority queue.

class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  // enqueue: Push the Value
  enqueue(value, priority) {
    this.queue.push({ value, priority });
    this.queue.sort((a, b) => b.priority - a.priority); //Highest Priority first
  }
  // dequeue: Remove the Value
  dequeue() {
    return this.queue.shift(); // Remove the first item (highest priority)
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

// Demo
const pq = new PriorityQueue();
pq.enqueue('Fever', 1);
pq.enqueue('Accident', 5);
pq.enqueue('Headache', 3);

console.log(pq.dequeue()); // Accident (priority 5)
console.log(pq.dequeue()); // Headache (priority 3)
