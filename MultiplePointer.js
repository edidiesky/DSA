function SumZero(arr) {
  let startPoint = 0;
  let endPoint = arr.length - 1;
  //   perform this loop while the atrtPoint is always less than the endpoint
  while (startPoint < endPoint) {
    let sum = arr[startPoint] + arr[endPoint];
    if (sum === 0) {
      // return the numbers
      return [arr[startPoint], arr[endPoint]];
      //   check if sum is greater than 0
    } else if (sum > 0) {
      endPoint--;
    } else {
      startPoint++;
    }
  }
}

function FindGreatestNumber(arr) {
  let greatestNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > greatestNumber) {
      greatestNumber = arr[i];
    }
  }
  return greatestNumber;
}
// console.log(FindGreatestNumber([10, 20, 40, 8,100,200,201, 6, 9, 10, 12, 17, 54]));

// Counting Unique Values Algorithm
function CountUniqueValues(arr) {
  var i = 0;
  if (arr.length === 0) {
    return i;
  }
  //   increase the position of i when the comaprism of 1 and j do not match
  for (let j = 1; j < arr.length; j++) {
    // compare the arr index of i and j to see if they are not equal
    // if this is true, we increase the position of i by 1 and update the arr position of i to be same as j
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
// console.log(CountUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 9, 6, 7, 8, 8, 8]));
//  i  j
// [1, 1, 2, 3, 3, 4, 5, 6,9, 6, 7,8,8,8];
//     2  j
//           j
