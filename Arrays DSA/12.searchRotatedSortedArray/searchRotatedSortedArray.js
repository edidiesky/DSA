function searchRotatedSortedArray(nums, target) {
  let start = 0
  let end = nums.length - 1
  while(start <= end) {
    let mid = Math.floor((start+end)/2)
    if(nums[mid] === target) return mid
    if(nums[start] <= nums[mid]) {
      if(nums[start] <= target && target <= nums[mid]) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    } else {
      if(nums[mid] <= target && target <= nums[end]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
  }
  return -1
}

console.log(searchRotatedSortedArray([3, 4, 5, 6, 7, 0, 1, 2], 7));
