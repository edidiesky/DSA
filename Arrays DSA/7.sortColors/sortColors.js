function sortColors(nums) {
  let right = nums.length - 1;
  let i = (left = 0);
  while (i <= right) {
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
/**
 * Initial values, right = 5, i=left=0
 * 1st iteration: [0,1,0,1,2,2] right = 4, i=left=0
 * 2nd iteration: [0,1,0,1,2,2] right = 4, i=left=1
 * 3rd iteration: [0,1,0,1,2,2] right = 4, i=2, left = 1
 * 4th iteration: b4 = [0,1,0,1,2,2], after = [0,0,1,1,2,2] right = 4, i=3, left = 2
 * 5th iteration: b4 = [0,0,1,1,2,2], after = [0,0,1,1,2,2] right = 4, i=4, left = 2
 */
console.log(sortColors(nums1));
