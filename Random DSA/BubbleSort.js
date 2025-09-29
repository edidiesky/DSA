function bubbleSort(array) {
  return array;
}

// console.log(bubbleSort([37, 45, 12, 4, 8, 9]));

function getNonRepatingCharacter(str) {
  let charObject = {};
  let start = 0;
  let maxChar = 0
  for (let end = 0; end < str.length; end++) {
    if (str[end] in charObject && charObject[str[end]] >= start) {
      start = charObject[str[end]] + 1;
    }
    charObject[str[end]] = end
    maxChar = Math.max(maxChar, end - start + 1)
  }
  return maxChar
}

console.log(getNonRepatingCharacter("aefagahaijbccadefagabcdefghijkaaaaaaaaaaaaaaaa"));

// function getRepatingCharacter(str) {
//   let charObject = {};
//   let start = 0;
//   let maxChar = 0;
//     for (let end = 0; end < str.length; end++) {
//       if (str[end] in charObject && charObject[str[end]] >= start) {
//         start = charObject[str[end]] + 1;
//       }
//       charObject[str[end]] = end;
//       maxChar = Math.max(maxChar, end - start + 1);
//     }
//     return maxChar;

// }

// console.log(
//   getRepatingCharacter("aefagahaijbccadefagabcdefghijkaaaaaaaaaaaaaaaa")
// );
