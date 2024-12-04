function maxProductSubarray(nums) {
    let maxProduct = nums[0];
    let currentMax = nums[0];
    let currentMin = nums[0];
    for (let i = 0; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax * nums[i]);
        currentMin = Math.min(nums[i], currentMax * nums[i]);
        maxProduct = Math.max(currentMax, currentMin);
    }
    return maxProduct;
}

let numbers1 = [6, 7, -4, 5, 8, 1];
console.log(maxProductSubarray(numbers1));