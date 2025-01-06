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

function threeSum(nums, target) {
  let result = [];

  for (let i = 0; i < array.length - 2; i++) {
    if (i >= 0 && nums[i] === nums[i - 1]) continue;

    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];

      if (sum === target) {
        result.push(nums[i], nums[start], nums[end]);

        while (nums[start] === nums[start + 1]) {
          start++;
        }

        while (nums[end] === nums[end - 1]) {
          end--;
        }

        start++;
        end--;
      } else if (sum < target) {
        start++;
      } else {
        end--;
      }
    }
  }

  return result;
}


function getMaxNumber(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], nums[i] + currentSum);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

console.log(getMaxNumber([-2,1,-3,4,-1,2,1,-5,4]));