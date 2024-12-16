function QuickSort(nums, left = 0, right = nums.length - 1) {
  if (left >= right) return nums;
  let pivotindex = getPivot(nums, left, right);

  getPivot(nums, left, pivotindex - 1);
  getPivot(nums, pivotindex + 1, right);

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

// const nums = [8, 3, 1, 7, 0, 10, 2];
// console.log(QuickSort(nums)); // Output: [0, 1, 2, 3, 7, 8, 10]

// function QuickSort(nums, left = 0, right = nums.length - 1) {
//   // Base case: if the partition size is 1 or 0, return
//   if (left >= right) return nums;

//   // Partition the nums and get the pivot index
//   let pivotIndex = getPivot(nums, left, right);

//   // Recursively sort the left and right partitions
//   QuickSort(nums, left, pivotIndex - 1);
//   QuickSort(nums, pivotIndex + 1, right);

//   return nums; // Return the sorted nums
// }

// function getPivot(nums, left, right) {
//   let pivot = nums[left]; // Choose the leftmost element as the pivot
//   let swapIndex = left;

//   // Iterate through the partition
//   for (let i = left + 1; i <= right; i++) {
//     if (nums[i] < pivot) {
//       swapIndex++;
//       Swap(nums, swapIndex, i); // Swap elements smaller than pivot
//     }
//   }

//   // Swap the pivot element with the element at the swap index
//   Swap(nums, left, swapIndex);

//   return swapIndex; // Return the final position of the pivot
// }

// function Swap(nums, index1, index2) {
//   [nums[index1], nums[index2]] = [nums[index2], nums[index1]]; // Swap using destructuring
// }

const nums = [8, 3, 1, 7, 0, 10, 2];
console.log(QuickSort(nums)); // Output: [0, 1, 2, 3, 7, 8, 10]
