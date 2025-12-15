let result = [];
let path = [];

result.push(path); // pushes reference to path
path.push(1);

console.log(result);  
// Output: [ [1] ]   ← result changed because path changed
