function MaxSubArray(array, num) {
  // check if the length of the array is less thank the num
  // create a maxsum and a temporary sum
  // add the first n number of the array
  // equate the sum to the max sum
  // outside this loop equate the maxsum to tempsum
  // loop through the array again starting at the num value,
  // subtract the tempsum from initial value and add the outcome to the present value
  // find the maxvalue between the temporary sum and max sum; equate the value to the maxsum
  // return the maxsum
  if (array.length < num) {
    return 0;
  }

  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

function MaxSubArrayMuliplication(array, num) {
  // check if the length of the array is less thank the num
  // create a maxsum and a temporary sum
  // add the first n number of the array
  // equate the sum to the max sum
  // outside this loop equate the maxsum to tempsum
  // loop through the array again starting at the num value,
  // subtract the tempsum from initial value and add the outcome to the present value
  // find the maxvalue between the temporary sum and max sum; equate the value to the maxsum
  // return the maxsum
  if (array.length < num) {
    return 0;
  }

  let tempSum = 1;
  let maxSum = 1;

  for (let i = 0; i < num; i++) {
    maxSum *= array[i];
  }
  tempSum = maxSum;
  for (let i = num; i < array.length; i++) {
    tempSum = (tempSum / array[i - num]) * array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(
//   MaxSubArrayMuliplication(
//     [1, 1, 3, 9, 1, 4, 5, 5, 6, 7, 3, 2, 1, 4, 3, 4, 6],
//     4
//   )
// );

// **************************************** SLIDING WINDOW QUESTIONS START ************************************
// 1. get the length of the longest no-repeating substring from a string
// function getLongestNonRepeatingSubString(string) {
//   // set placeholders(variables)
//   let tempNumber = 0;
//   let maxNumber = 0;
//   let count = 0;
//   for (let i = 0; i < 2; i++) {
//     if (string[i] !== string[i + 1]) {
//       maxNumber += 1;
//     }
//   }

//   tempNumber = maxNumber;
//   // console.log(tempNumber, maxNumber);
//   for (let i = tempNumber; i < string.length - 1; i++) {
//     console.log(`Slide: ${string[i - tempNumber] + string[i]}`);
//     if (string[i] !== string[i + 1]) {
//       tempNumber = tempNumber - (i - tempNumber) + i;
//       console.log(tempNumber);
//     }
//   }
//   return maxNumber;
// }
// console.log(getLongestNonRepeatingSubString("aefagahijbcdefag"));
function getLongestNonRepeatingSubString(s) {
  // let charSet = new Set(); // Set to track unique characters
  // let maxLength = 0; // To store the length of the longest substring
  // let left = 0; // Left pointer for the sliding window

  // // Iterate over the string with the right pointer
  // for (let right = 0; right < string.length; right++) {
  //   // If a duplicate character is found, shrink the window by moving 'left'
  //   while (charSet.has(string[right])) {
  //     charSet.delete(string[left]); // Remove the leftmost character
  //     left++; // Move left pointer to the right
  //   }
  //   console.log(charSet);
  //   // Add the current character to the set
  //   charSet.add(string[right]);
  //   console.log(charSet);
  //   // Calculate the current window length and update maxLength
  //   maxLength = Math.max(maxLength, right - left + 1);
  // }

  // return maxLength; // Return the length of the longest substring
  let charIndex = {}; // Dictionary to store the last index of each character
  let maxLength = 0; // Initialize the maximum length
  let start = 0; // Starting index of the current window

  for (let end = 0; end < s.length; end++) {
    if (s[end] in charIndex && charIndex[s[end]] >= start) {
      start = charIndex[s[end]] + 1; // Update the starting index if a duplicate is found
    }
    charIndex[s[end]] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage
console.log(getLongestNonRepeatingSubString("aefagahaijbccadefagabcdefghijk")); // Output: 8 ("hijbcdef")

// console.log(getLongestNonRepeatingSubString("aaeagahijbcdefag"));
// **************************************** SLIDING WINDOW QUESTIONS END ************************************
