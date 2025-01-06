function minSizeSubarraySum(nums, target) {
  let left = 0;
  let sum = 0;
  let result = Infinity;
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];

    while (sum >= target) {
      result = Math.min(result, end - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return result === Infinity ? 0 : result;
}

let nums = [2, 4, 1, 2, 4, 3];
console.log(minSizeSubarraySum(nums, 7));


