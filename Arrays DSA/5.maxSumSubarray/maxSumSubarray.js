function maxSumSubarray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], nums[i] + currentSum);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

let nums = [-7, -2, 3, 4, -5, 6, 7, -2];
console.log(maxSumSubarray(nums));
