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

console.log(
  MaxSubArray([1, 1, 3, 9, 0, 0, 4, 5, 5, 6, 7, 3, 2, 1, 4, 3, 4, 6], 25)
);
