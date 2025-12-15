// O(n^2) Approach
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j];
            }
        }
    }
};

// Time Complexity - O(n^2), Space complexity - O(1)

//________________________________________________________________________________________________________________________________________

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){ //O(n)
        map.set(nums[i], i);
    }

    for(let i = 0; i < nums.length; i++){ // O(n)
        let pairToFind = target - nums[i];
        if(map.has(pairToFind) && map.get(pairToFind) != i){
            return [i, map.get(pairToFind)];
        }
    }
};

// Time complexity - O(n), Space complexity - O(n)