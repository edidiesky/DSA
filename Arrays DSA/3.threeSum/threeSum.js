function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let end = nums.length - 1;

    while (left < end) {
      const sum = nums[i] + nums[left] + nums[end];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[end]]);
        while (left < end && nums[left] === nums[left + 1]) left++;
        while (left < end && nums[end] === nums[end - 1]) end--;
        left++;
        end--;
      } else if (sum < 0) {
        left++;
      } else {
        end--;
      }
    }
  }
  return result;
}
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
