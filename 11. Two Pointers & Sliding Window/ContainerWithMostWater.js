// My code - Brute Force Approach - Timeout

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = -1
    let area = -1

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let xAxisDiff = Math.abs(i - j);
            let yAxisLowestVal = Math.min(height[i], height[j]);
            area = xAxisDiff * yAxisLowestVal;
            maxArea = area > maxArea ? area : maxArea;
        }
    }

    return maxArea;

};

// T - O(n^2)
//_________________________________________________________________________________________________________________________________________

// Greedy Approach
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0
    let j = height.length - 1;
    let maxArea = -1
    let area = -1

    while (i != j) {
        let xAxisDiff = Math.abs(i - j);
        let yAxisLowestVal = Math.min(height[i], height[j]);
        area = xAxisDiff * yAxisLowestVal;
        maxArea = area > maxArea ? area : maxArea;

        if (height[i] < height[j]) { // Move the pointer whose value is smaller - greedy approach
            i++;
        }
        else {
            j--;
        }
    }

    return maxArea;

};

// T - O(n), S - O(1)

/*
So When Should Greedy Come to Mind?

1. You’re optimizing something (max/min)
Examples:
Max area
Min cost
Max profit

✔ 2. You can eliminate choices confidently
Like:
“Moving left pointer won’t help (taller), so I discard this entire path.”
"Choosing the smallest or largest option removes other options logically."

✔ 3. Local best choice guarantees progress
You don’t need to fix previous decisions.


If a problem matches at least 2 of these, consider greedy:
Optimize something? ✅
Can you eliminate bad choices permanently? ✅
Does each choice move you toward the solution? ✅
*/