function QuickSort(nums, left = 0, right = nums.length - 1) {
  if (left >= right) return nums;
  let pivotindex = getPivot(nums, left, right);

  QuickSort(nums, left, pivotindex - 1);
  QuickSort(nums, pivotindex + 1, right);

  return nums;
}

function getPivot(nums, left, end) {
  let pivot = nums[left];
  let pivotindex = left;

  for (let i = left + 1; i <= end; i++) {
    const element = nums[i];
    if (element < pivot) {
      pivotindex++;
      Swap(nums, pivotindex, i);
    }
  }
  Swap(nums, left, pivotindex);
  return pivotindex;
}

function Swap(nums, index1, index2) {
  [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
}

const nums = [8, 3, 1, 7, 0, 10, 2];
console.log(QuickSort(nums)); // Output: [0, 1, 2, 3, 7, 8, 10]
