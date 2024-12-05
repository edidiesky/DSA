function rotateArray(nums, k) {
  k %= nums.length;
  // rotate all array from 0 to nums.length -1
  swapArray(nums, 0, nums.length - 1);
  // rotate array from index 0 to k-1
  swapArray(nums, 0, k - 1);

  // rotate all array from k to nums.length -1
  swapArray(nums, k, nums.length - 1);

  return nums;
}

function swapArray(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 4));
