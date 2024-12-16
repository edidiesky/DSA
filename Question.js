// function buySellStock(stockPrices) {
//   let maxPrice = 0;
//   let end = 1;
//   let start = 0;

//   while (end < stockPrices.length) {
//     if (stockPrices[end] > stockPrices[start]) {
//       maxPrice = Math.max(maxPrice, stockPrices[end] - stockPrices[start]);
//     } else {
//       start = end;
//     }
//     end++;
//   }

//   return maxPrice;
// }

// let prices = [8, 3, 6, 4, 7, 5];

// console.log(buySellStock(prices));

// function longestNonRepeatingSubstring(str) {
//   let set = new Set();
//   let start = 0;
//   let end = 0;
//   let maxLength = 0;
//   while (end < str.length) {
//     if (set.has(str[end])) {
//       set.delete(str[start]);
//       start++;
//     }
//     set.add(str[end]);
//     end++;
//     maxLength = Math.max(maxLength, set.size);
//   }

//   return maxLength;
// }

// let s = "abcghiabcbbaa";

// console.log(longestNonRepeatingSubstring(s));

// function containerWithMostWater(heights) {
//   let maxCapacity = 0;
//   let end = heights.length - 1;
//   let start = 0;

//   while (start < end) {
//     let currentCapacity =
//       (end - start) * Math.min(heights[end], heights[start]);
//     maxCapacity = Math.max(maxCapacity, currentCapacity);
//     if (heights[end] > heights[start]) {
//       start++;
//     } else {
//       end--;
//     }
//   }
//   return maxCapacity;
// }

// let height = [3, 9, 4, 1, 5, 4, 7, 1, 7];

// console.log(containerWithMostWater(height));

// function searchRotatedSortedArray(nums, target) {
//   //   nums.sort((a, b) => a - b);
//   let start = 0;
//   let end = nums.length - 1;
//   while (start <= end) {
//     let middle = Math.floor((end + start) / 2);
//     if (nums[middle] === target) {
//       return middle;
//     }

//     if (nums[start] <= nums[middle]) {
//       if (nums[start] <= target && target <= nums[middle]) {
//         end = middle - 1;
//       } else {
//         start = middle + 1;
//       }
//     } else {
//       if (nums[middle] <= target && target <= nums[end]) {

//           start = middle + 1;
//       } else {
//         end = middle - 1;
//       }
//     }
//   }
//   return -1
// }

// function searchRotatedSortedArray(nums, target) {
//   let start = 0;
//   let end = nums.length - 1;
//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2);
//     if (nums[middle] === target) {
//       return middle;
//     }
//     if (nums[start] <= nums[middle]) {
//       if (nums[start] <= target && target <= nums[middle]) {
//         end = middle - 1;
//       } else {
//         start = middle + 1;
//       }
//     } else {
//       if (nums[middle] <= target && target <= nums[end]) {
//         start = middle + 1;
//       } else {
//         end = middle - 1;
//       }
//     }
//   }

//   return -1;
// }

// console.log(searchRotatedSortedArray([3, 4, 5, 6, 7, 0, 1, 2], 7));

// function rotateArray(nums, k) {
//   swapArray(nums,0, nums.length -1)
//   swapArray(nums,0, k-1)
//   swapArray(nums, k+1, nums.length -1);
//   return nums
// }

// function swapArray(nums, start, end) {
//   while (start < end) {
//     [nums[start], nums[end]] = [nums[end], nums[start]];
//     start++
//     end--
//   }
// }

// let nums = [-10, 4, 5, -1]// n = 2

// console.log(rotateArray(nums, 2));

// function QuickSort(nums, left = 0, right = nums.length - 1) {
//   if (left >= right) {
//     return nums;
//   }

//   let pivotindex = getPivot(nums, left, right);
//   QuickSort(nums, left, pivotindex - 1);
//   QuickSort(nums, pivotindex + 1, right);

//   return nums;
// }
// function getPivot(nums, left, right) {
//   let pivot = nums[left];
//   let swapIndex = left;

//   for (let i = left + 1; i <= right; i++) {
//     if (nums[i] < pivot) {
//       swapIndex++;
//       SwapIndex(nums, swapIndex, i);
//     }
//   }
//   SwapIndex(nums, left, swapIndex);
//   return swapIndex;
// }
// function SwapIndex(nums, index1, index2) {
//   [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
// }

// const nums = [8, 3, 1, 7, 0, 10, 2];
// console.log(QuickSort(nums)); // Output: [0, 1, 2, 3, 7, 8, 10]

// function maxSumCircularSubarray(nums) {
//   let maxSum = kandaneSum(nums);

//   let totalSum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     totalSum += nums[i];
//   }
//   let minSum = kandaneSum(nums.map((num) => -num));
//   minSum = -minSum;

//   if (totalSum === minSum) {
//     return totalSum;
//   }

//   return Math.max(maxSum, totalSum - minSum);
// }

// function kandaneSum(nums) {
//   let currentSum = 0;
//   let maxSum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     currentSum = Math.max(nums[i], currentSum + nums[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// }
// let nums = [9, -9, 6, 11, -6, -10, 15, 1]; //30
// console.log(maxSumCircularSubarray(nums));

// function validAnagram(str1, str2) {
//   let charCount = {};
//   for (let char of str1) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   for (let char of str2) {
//     if (!charCount[char]) {
//       return false;
//     }

//     charCount[char]--;
//   }

//   return true;
// }

// console.log(validAnagram("anagram", "nagaram"));

// function validPalindrome(str) {
//   str = str.replace(/[a-z0-9A-Z]/g, "").toLowerCase();
//   let start = 0;
//   let end = str.length - 1;
//   while (start < end) {
//     if (str[start] !== str[end]) {
//       return false;
//     }
//     start++;
//     end--;
//   }

//   return true;
// }

// let str1 = "A man, a plan, a canal: Panama";
// console.log(validPalindrome(str1));

// function reverseWordsInString(str) {
//   str = str.replace(/[^a-z0-9A-Z]/g, "").toLowerCase();
//   return str.split("").reverse().join("");
// }

// let str = "hello DSA";
// console.log(reverseWordsInString(str));

function lastWordLength(str) {
  str = str.replace(/[^a-z0-9A-Z]/g, "");
  return str.split("").pop();
}

let str = " My pet is fluffy  ";

console.log(lastWordLength(str));
