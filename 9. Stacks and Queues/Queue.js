let q = [];

// enqueue
q.push(1);
q.push(2);
q.push(3);

// dequeue
q.shift();

// peek / front
console.log(q[0]);

// Invalid Queue operation. Since, you are using array as queue, you cannot use pop.
q.pop();
