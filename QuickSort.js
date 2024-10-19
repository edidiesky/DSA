// Create a Pivot Helper
// create a Swap Helper
// Create the sorting sort algorithm that runs recursively

function SwapNumbers(arr, swapIdx, i) {
  let tempPosition = arr[swapIdx];
  arr[swapIdx] = arr[i];
  arr[i] = tempPosition;
}

function getPivot(arr, start = 0, end) {
  // first pivot
  let pivot = arr[start];
  // swap idx
  let swapIdx = start;
  // find the number
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      SwapNumbers(arr, swapIdx, i);
    }
  }
  // swap the pivot with the swapIdx
  SwapNumbers(arr, start, swapIdx);
  return swapIdx;
}

function QuickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotNumber = getPivot(arr, left, right);
    QuickSort(arr, left, pivotNumber - 1); // sort from the left
    QuickSort(arr, pivotNumber + 1, right); // sort from the right
  }
  return arr;
}

console.log(QuickSort([4, 6, 9, 1, 2, 5, 3]));
