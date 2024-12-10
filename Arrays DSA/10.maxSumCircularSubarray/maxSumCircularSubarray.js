// get the Maximum Sum
// get the total Sum
// get the Mimimum Sum
// Compare if the minsum and total sum are equal return totalsum
// Else return max value from the maxSun and diff.
function maxSumCircularSubarray(nums) {
  let maxSum = kandane(nums);
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }
  let minSum = kandane(nums.map((num) => -num));
  minSum = -minSum;
  if (totalSum === minSum) {
    return totalSum;
  } return Math.max(maxSum, totalSum - minSum);
}
function kandane(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

let numbers1 = [6, -2, 6];
console.log("Max circular subarray Sum:", maxSumCircularSubarray(numbers1));