// My code with duplicate Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let numsCopy = nums.concat(nums);
    let stack = [];
    let ngeMap = {};
    stack.push(numsCopy[numsCopy.length - 1]);
    ngeMap[numsCopy.length - 1] = -1;

    for(let i = numsCopy.length - 2; i >= 0; i--){
        while(stack.length){
            let topOfStack = stack[stack.length - 1];
            if(topOfStack > numsCopy[i]){
                ngeMap[i] = topOfStack;
                break;
            }
            else{
                stack.pop();
            }
        }

        if(stack.length == 0){
            ngeMap[i] = -1;
        }

        stack.push(numsCopy[i]);
    }

    let ans = [];
    for(let i = 0; i < nums.length; i++){
        ans.push(ngeMap[i]);
    }
    return ans;
    
};

// ________________________________________________________________________________________________________________________________

// My code without duplicate array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [];
    let ngeMap = {};

    for(let i = (nums.length * 2) - 1; i >= 0; i--){
        let idx = i % nums.length;
        while(stack.length){
            let topOfStack = stack[stack.length - 1];
            if(topOfStack > nums[idx]){
                ngeMap[idx] = topOfStack;
                break;
            }
            else{
                stack.pop();
            }
        }

        if(stack.length == 0){
            ngeMap[idx] = -1;
        }

        stack.push(nums[idx]);
    }

    let ans = [];
    for(let i = 0; i < nums.length; i++){
        ans.push(ngeMap[i]);
    }
    return ans;
    
};

// Time - O(n), Space - O(n)