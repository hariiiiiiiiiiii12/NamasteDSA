/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let arr = s.split('');
    for (let i = 0; i < arr.length; i += 2*k) {
          for(let j = 0; j < Math.floor(k/2); j++){
                let temp = arr[j+i];
                arr[j+i] = arr[i+k-j-1];
                arr[i+k-j-1] = temp;
          }
    }
    return arr.join('');
};
// Time Complexity - O(n)
// Space Complexity - O(1)