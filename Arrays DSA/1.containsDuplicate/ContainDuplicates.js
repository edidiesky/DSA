// go through the map and check if it does not exist
// add it if it does not exist
//
function ContainDuplicates(nums) {
  if (nums.length === 0) return false;
  const map = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.add(nums[i]);
    } else {
      return true;
    }
  }
  return false;
}

const nums = [1, 2, 3, 4, 5];

console.log(ContainDuplicates(nums));
