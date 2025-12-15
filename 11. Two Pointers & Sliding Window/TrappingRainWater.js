// My Code - 323/324 test cases passed, last one failed due to timeout issue
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxL = 0;
    let maxR = 0;
    let unitOfWaterStoredForCurrentIndex = 0;
    let totalUnitOfWaterStored = 0;
    for(let i = 0; i < height.length; i++){
        let currentIndex = i;
        for(let i = currentIndex; i > -1; i--){
            maxL = height[i] > maxL ? height[i] : maxL;
        }
        for(let i = currentIndex; i < height.length; i++){
            maxR = height[i] > maxR ? height[i] : maxR;
        }
        unitOfWaterStoredForCurrentIndex = Math.min(maxL, maxR) - height[i];
        maxL = maxR = 0;
        totalUnitOfWaterStored = totalUnitOfWaterStored + unitOfWaterStoredForCurrentIndex;
    }

    return totalUnitOfWaterStored;
    
};

// _________________________________________________________________________________________________________________________________________

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    let maxL = [];
    let maxR = [];
    let totalUnitsOfWaterStored = 0;

    maxL[0] = height[0];
    for (let i = 1; i < n; i++) {
        maxL[i] = Math.max(height[i], maxL[i - 1]);
    }

    maxR[n-1] = height[n-1];
    for (let i = n-2; i >= 0; i--) {
        maxR[i] = Math.max(height[i], maxR[i + 1]);
    }

    for(let i = 0; i < n; i++){
        totalUnitsOfWaterStored = totalUnitsOfWaterStored + (Math.min(maxL[i], maxR[i]) - height[i]);
    }

    return totalUnitsOfWaterStored;
};

// Time - O(n), Space - O(n)