function sortColors(nums) {
  let left = 0;
  let i = 0;
  let right = nums.length - 1;
  while (i < right) {
    if (nums[i] === 0) {
      swapColors(nums, i, left);
      left++;
      i++;
    } else if (nums[i] === 2) {
      swapColors(nums, i, right);

      right--;
    } else {
      i++;
    }
  }
  return nums;
}

function swapColors(nums, left, right) {
  [nums[left], nums[right]] = [nums[right], nums[left]];
}

let nums1 = [2, 1, 0, 1, 2, 0];
console.log(sortColors(nums1));
