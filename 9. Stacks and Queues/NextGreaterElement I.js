// My approach - using nested for loops and map (not ideal)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = {};
    let ans = [];
    for(let i = 0; i < nums2.length; i++){
        map[nums2[i]] = -1;
        for(let j = i + 1; j < nums2.length; j++){
            if(nums2[j] > nums2[i]){
                map[nums2[i]] = nums2[j];
                break;
            }
        }
    }

    for(let i = 0; i < nums1.length; i++){
        ans.push(map[nums1[i]]);
    }

    return ans;
    
};

// Time Complexity - O(n^2), Space complexity - O(n) "IF" you consider the ans array else no.

// ___________________________________________________________________________________________

// This code is not ideal. Akshay's code is correct
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let ngeMap = {};
    let stack = [];
    let ans = [];
    ngeMap[nums2[nums2.length - 1]] = -1; // The last element's nGE will anyways be -1
    stack.push(nums2[nums2.length - 1]); // pushing the last element into stack
    for (let i = nums2.length - 2; i >= 0; i--) {
        ngeMap[nums2[i]] = -1; // initialize key with -1, you can later override when appropriate.
        while (stack.length) {
            let poppedNumber = stack.pop()
            if (poppedNumber > nums2[i]) {
                ngeMap[nums2[i]] = poppedNumber;
                stack.push(poppedNumber);
                stack.push(nums2[i]);
                break;
            }
        }
            stack.push(nums2[i]); // If no nGE is found, you still have to push the element to the stack.
    }

    for(let i = 0; i < nums1.length; i++){
        ans.push(ngeMap[nums1[i]]);
    }

    return ans;

};

// ________________________________________________________________________________________________________________________

// Akshay code - This is the correct code
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let ngeMap = {};
    let stack = [];
    let ans = [];
    ngeMap[nums2[nums2.length - 1]] = -1; // The last element's nGE will anyways be -1
    stack.push(nums2[nums2.length - 1]); // pushing the last element into stack
    for (let i = nums2.length - 2; i >= 0; i--) {
        while (stack.length) {
            let topOfStack = stack[stack.length - 1];
            if(nums2[i] < topOfStack){
                ngeMap[nums2[i]] = topOfStack;
                break;
            }
            else{
                stack.pop();
            }
        }
        if(stack.length == 0){
            ngeMap[nums2[i]] = -1;              
        }
       stack.push(nums2[i]); // If no nGE is found, you still have to push the element to the stack
    }

    for(let i = 0; i < nums1.length; i++){
        ans.push(ngeMap[nums1[i]]);
    }

    return ans;

};

// Time complexity - O(n) due to amortized analysis ig rather than worst case analysis as worst case analysis would be misleading here. 