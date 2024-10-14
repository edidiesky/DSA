function binarySearch(array, num) {
  // check if the length is 0 and return -1 is true
  if (array.length === 0) return -1;
  //  create a start, end and middle point
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((end + start) / 2);
  //  loop through while the middle value is not equal to the num value
  while (array[middle] !== num && start <= end) {
    // and also loop while the start value is less than or equal to the end value
    if (array[middle] > num) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    //   check if the num value is less than the middle value
    middle = Math.floor((end + start) / 2);
  }
  //  if true return end value as the midde  -1
  // else start value is  = middle + -1
  return array[middle] === num ? middle : -1;
}
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     100
//   )
// );

// "Edidiong is a boy" "did"

// function NativeStringSearch(long, short) {
//   let count = 0;
//   for (let i = 0; i < long.length; i++) {
//     for (let j = 0; j < short.length; j++) {
//       if (short[j] !== long[i + j]) break;
//       if (j === short.length - 1) count++;
//     }
//   }
//   return count;
// }

// console.log(NativeStringSearch("Edidiong is Boy","Boy"));

function plagiarismCheck(long, short) {
  //  set the count variable
  let count = 0;
  // loop through the long word and also through the short word
  for (let i = 0; i < long.length; i++) {
    // inner loop; compare the index of the short word with
    //  the index of the long and short word together
    for (let j = 0; j < short.length; j++) {
      //  if the short word does not match break the inner loop
      if (short[j] !== long[i + j]) break;
      // if it matches and it has reaches the end of the short word
      // then increment the count variable
      if (j === short.length - 1) count++;
    }
  }
  //  return the count variable
  return count;
}
let longText3 =
  "Sustainable energy sources are essential for combating climate change. By investing in renewable technologies, we can reduce our carbon footprint and ensure a cleaner environment for future generations.";
let shortText3 = "renewable technologies";

console.log(plagiarismCheck(longText3, shortText3));

function findLongestNonRepeatingString(s) {
  let stringObject = {};
  let MaxWordLength = 0;
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    if (stringObject[s[end]] >= 0 && s[end] in stringObject) {
      start = stringObject[s[end]] + 1;
    }
    stringObject[s[end]] = end;
    MaxWordLength = Math.max(MaxWordLength, end - start + 1);
  }
  return MaxWordLength;
}
console.log(getLongestNonRepeatingSubString("aefagahaijbccadefagabcdefghijk")); // Output: 8 ("hijbcdef")


// Step-by-Step Breakdown:
// Let's walk through the sample input string "aefagahaijbccadefagabcdefghijk" to see how it works:

// Initial Steps:

// start = 0, end = 0, window is "a", length is 1 (end - start + 1 = 0 - 0 + 1).
// MaxWordLength is updated to 1.
// Next Iterations:

// start = 0, end = 1, window is "ae", length is 2 (end - start + 1 = 1 - 0 + 1).

// MaxWordLength is updated to 2.

// start = 0, end = 2, window is "aef", length is 3 (end - start + 1 = 2 - 0 + 1).

// MaxWordLength is updated to 3.

// First Repeating Character:

// At end = 3, the character is 'a', which repeats (it was last seen at index 0).
// Move start to 1 (just after the first 'a').
// The window becomes "efa" and its length is 3 (end - start + 1 = 3 - 1 + 1), but MaxWordLength remains 3 as it is not greater than the previous value.
// Proceeding:

// Continue this process for each character. When a repeat is found, the start pointer shifts, and MaxWordLength is updated if the current window is longer than the previous longest substring.
// At the Substring "hijbcdef":

// By the time the algorithm reaches "hijbcdef" (from index 7 to 14), there are no repeating characters.
// The window length is 8 (end - start + 1 = 14 - 7 + 1 = 8).
// MaxWordLength is updated to 8, as this is the longest substring without repeating characters.
// Final Steps:

// As the algorithm continues through the rest of the string, no non-repeating substring exceeds this length of 8.
// Hence, MaxWordLength remains 8 and is returned as the final result.