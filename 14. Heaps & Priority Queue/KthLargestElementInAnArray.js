var findKthLargest = function(nums, k) {
    let pq = new MinPriorityQueue();
    for(let i = 0; i < nums.length; i++) {
        pq.enqueue(nums[i]);
        if(pq.size() > k){
            pq.dequeue();
        }
    }
    return pq.front();
};


// ________________________________________________________________________________________________________________________________________
// Max Priority Queue - Not Efficient
let pq = new MaxPriorityQueue();
for (let num of nums) pq.enqueue(num);

for (let i = 1; i < k; i++) pq.dequeue();

return pq.front();
