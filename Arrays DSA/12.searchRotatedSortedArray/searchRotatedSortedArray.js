function searchRotatedSortedArray(nums, target) {
//   nums.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  let middle = Math.floor((end + start) / 2);
  while (start < end && nums[middle] != target) {
    if (nums[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((end + start) / 2);
  }

  return nums[middle] === target ? middle : -1;
}

console.log(searchRotatedSortedArray([3, 4, 5, 6, 7, 0, 1, 2], 7));
