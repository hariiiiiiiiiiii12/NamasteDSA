let stack = [];

stack.push(5)
stack.push(10)
stack.push(15)
stack.push(20)
stack.push(25)
stack.push(30)
stack.push(35)

console.log(stack);

stack.pop()
console.log(stack);

// peek / finding the top most element of the stack
console.log(stack[stack.length - 1]);

// Invalid stack operation. You can ofcourse use access stack elements like below, but this is not what stacks are meant for.
console.log(stack[3]);