function threeSum(nums) {
  nums = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      let sums = nums[start] + nums[end] + nums[i];
      if (sums === 0) {
        result.push([nums[start], nums[end], nums[i]]);
        while (nums[start] === nums[start + 1]) start++;
        while (nums[end] === nums[end - 1]) end--;
        start++;
        end--;
      } else if (sums < 0) {
        start++;
      } else {
        end++;
      }
    }
  }

  return result;
}

const nums = [-1, 0, 1, 2, -1, -4]; 
console.log(threeSum(nums));

