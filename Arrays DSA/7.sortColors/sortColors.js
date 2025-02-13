function sortColors(nums) {
}

function swapColors(nums, left, right) {
  [nums[left], nums[right]] = [nums[right], nums[left]];
}

let nums1 = [2, 1, 0, 1, 2, 0];
console.log(sortColors(nums1));
