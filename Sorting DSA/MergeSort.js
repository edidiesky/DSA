function MergeSort(arr) {
  /**
   * Check if the arr length is <= 1, return arr
   * Split the array into 2 halves
   * Perform recursion on the left side of the array
   * Perform recursion on the right side of the array
   * Merge both right and left side of the array's
   * Merge both of the array's
   */
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  const leftMerged = MergeSort(arr.slice(0, mid));
  const rightMerged = MergeSort(arr.slice(mid));

  return Merge2Sort(leftMerged, rightMerged);
}

function Merge2Sort(arr1, arr2) {
  let i = 0,
    j = 0,
    result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    }
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

let arr = [10, 20, -2, 5, 6, 30, 8, 9, 24, 100, 21, 16, 17, -5];
console.log(MergeSort(arr));
