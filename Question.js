// function QuickSort(nums, start = 0, end = nums.length - 1) {
//   if (start >= end) {
//     return nums;
//   }

//   let pivot = getPivot(nums, start, end);
//   QuickSort(nums, start, pivot - 1);
//   QuickSort(nums, pivot + 1, end);
//   return nums;
// }

// function getPivot(nums, start, end) {
//   let pivot = nums[start];
//   let pivotIndex = start;

//   for (let i = start + 1; i <= end; i++) {
//     if (pivot > nums[i]) {
//       pivotIndex++;
//       swapNumbers(nums, pivotIndex, i);
//     }
//   }

//   swapNumbers(nums, start, pivotIndex);

//   return pivotIndex;
// }

// function swapNumbers(nums, index1, index2) {
//   [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
// }

// const nums = [8, 3, 1, 7, 0, 10, 2];
// console.log(QuickSort(nums)); // Output: [0, 1, 2, 3, 7, 8, 10]

// function findSubsetsThatSumToTarget(nums, target) {
//   let result = [];
//   function dfs(index, currentsubset, currentsum) {
//     if (currentsum === target) {
//       result.push([...currentsubset]);
//       return;
//     }
//     if (currentsum > target) {
//       return;
//     }

//     for (let i = index; i < nums.length; i++) {
//       currentsubset.push(nums[i]);
//       dfs(i + 1, currentsubset, nums[i] + currentsum);
//       currentsubset.pop();
//     }
//   }

//   dfs(0, [], 0);

//   return result;
// }
// let nums = [2, 3, 6, 7];

// console.log(findSubsetsThatSumToTarget(nums, 7));

// function containsDuplicate(nums) {
//   let charCount = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (!charCount.has(nums[i])) {
//       charCount.add(nums[i]);
//     } else {
//       return true;
//     }
//   }

//   return false;
// }

// let nums = [1, 3, 2,4,5,6,7];

// console.log(containsDuplicate(nums));

// function twoSum2(nums, target) {
//   let result = [];
//   let start = 0;
//   let end = nums.length - 1;

//   while (start < end) {
//     let sum = nums[start] + nums[end];
//     if (sum === target) {
//       result.push([nums[start], nums[end]]);
//       start++;
//       end--;
//     } else if (sum < target) {
//       start++;
//     } else {
//       end--;
//     }
//   }

//   return result;
// }

// let numbers = [2, 7, 11, 15, 9];

// console.log(twoSum2(numbers, 16));
// function threeSum(nums, target) {
//   let result = [];

//   for (let i = 0; i < array.length - 2; i++) {
//     if (i >= 0 && nums[i] === nums[i - 1]) continue;

//     let start = i + 1;
//     let end = nums.length - 1;

//     while (start < end) {
//       let sum = nums[i] + nums[start] + nums[end];

//       if (sum === target) {
//         result.push(nums[i], nums[start], nums[end]);

//         while (nums[start] === nums[start + 1]) {
//           start++;
//         }

//         while (nums[end] === nums[end - 1]) {
//           end--;
//         }

//         start++;
//         end--;
//       } else if (sum < target) {
//         start++;
//       } else {
//         end--;
//       }
//     }
//   }

//   return result;
// }
// function getMaxNumber(nums) {
//   let currentSum = nums[0];
//   let maxSum = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     currentSum = Math.max(nums[i], nums[i] + currentSum);
//     maxSum = Math.max(currentSum, maxSum);
//   }
//   return maxSum;
// }
// console.log(getMaxNumber([-2,1,-3,4,-1,2,1,-5,4]));

// function QuickSort(nums, start = 0, end = nums.length - 1) {
//   if (start >= end) return nums;
//   let pivot = getPivot(nums, start, end);
//   QuickSort(nums, start, pivot - 1);
//   QuickSort(nums, pivot + 1, end);
//   return nums;
// }

// function getPivot(nums, start, end) {
//   let pivot = nums[start];
//   let pivotIndex = start;
//   for (let i = start + 1; i <= end; i++) {
//     const num = array[i];
//     if (num < pivot) {
//       pivotIndex++;
//       swapIndex(nums, pivotIndex, i);
//     }
//   }
//   swapIndex(nums, start, pivotIndex);
//   return pivotIndex;
// }

// function swapIndex(nums, idx1, idx2) {
//   [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]];
// }

// function minSizeSubArraySum(nums, target) {
//   let start = 0;
//   let sum = 0;
//   let result = Infinity;

//   for (let end = 0; end < nums.length; end++) {
//     sum += nums[end];
//     if (sum >= target) {
//       result = Math.min(result, end - start + 1);
//       sum -= nums[start];
//       start++;
//     }
//   }

//   return result === Infinity ? 0 : result;
// }
// function sortColors(color) {
//   let start = 0;
//   let i = 0;
//   let end = color.length - 1;

//   while (i < end) {
//     if (color[i] === 0) {
//       swapColors(color, i, start);
//       start++;
//       i++;
//     } else if (color[i] === 2) {
//       swapColors(color, i, end);
//       end--;
//     } else {
//       i++;
//     }
//   }
//   return color;
// }

// function swapColors(nums, idx1, idx2) {
//   [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]];
// }

// let nums = [2, 1, 0, 1, 2, 0];

// console.log(sortColors(nums));

// function combinationalSum(nums, target) {
//   let result = [];

//   function backTrack(index, currentSum, currentSubset) {
//     if (currentSum === target) {
//       result.push([...currentSubset]);
//       return;
//     }

//     if (currentSum > target) {
//       return;
//     }

//     for (let i = index; i < nums.length; i++) {
//       const num = nums[i];
//       console.log("current_subset_before", currentSubset);

//       currentSubset.push(num);
//       console.log("current_subset_after", currentSubset);
//       console.log("current_sum_before", currentSum);
//       backTrack(i, currentSum + num, currentSubset);
//       console.log("current_sum_after", currentSum);

//       // console.log("current_backtrack", currentSubset)

//       currentSubset.pop();
//     }
//   }

//   backTrack(0, 0, []);
//   return result;
// }

// let nums = [2, 5, 6, 9];
// let target = 9;
// console.log(combinationalSum(nums, target));

function findMedianOf2SortedArray(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, [nums2]] = [nums2, nums1];
  }

  let x = nums1.length;
  let y = nums2.length;

  let low = 0;
  let high = x;

  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((x + y + 1) / 2) - partitionX; // lefthalf = partitionX + partitionY

    // checking out of bound elements
    // get maxleft, minRight for both nums1(X) and nums2 (X)
    let maxLeftX = partitionX === 0 ? Infinity : nums1[partitionX - 1];
    let minRightX = partitionX === x ? -Infinity : nums1[partitionX];

    let maxLeftY = partitionY === 0 ? Infinity : nums2[partitionY - 1];
    let minRightY = partitionY === y ? Infinity : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) % 2 === 0) {
        return (
          (Math.max((maxLeftX, maxLeftY)) + Math.max(minRightX, minRightY)) / 2
        );
      } else {
        return Math.max((maxLeftX, maxLeftY));
      }
    } else if (maxLeftX < minRightY) {
      low = partitionX + 1;
    } else {
      high = partitionX - 1;
    }
  }
  throw new Error("The input arrays were not sorted");

  //   console.log(([[nums1], [nums2]] = [[nums2], [nums1]]));
}

let nums1 = [1, 3];
let nums2 = [2, 4];

console.log(findMedianOf2SortedArray(nums1, nums2));
