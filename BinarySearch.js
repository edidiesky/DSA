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
