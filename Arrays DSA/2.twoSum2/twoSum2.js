function twoSum(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let result = [];
  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum === target) {
      result.push(nums[start], nums[end]);
      start++;
      end--;
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  return result;
}

const nums = [2, 7, 11, 15, 9];
console.log(twoSum(nums, 16))