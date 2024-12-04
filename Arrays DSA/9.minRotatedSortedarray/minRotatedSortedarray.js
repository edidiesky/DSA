function minRotatedSortedarray(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let middle = Math.floor((right + left) / 2);
    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return nums[left];
}



let sortedArray = [3, 4, 5, 6, 7, -1, 2];
console.log(minRotatedSortedarray(sortedArray));