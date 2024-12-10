function containerWithMostWater(heights) {
  let start = 0;
  let end = heights.length - 1;
  let maxCapacity = 0;
  while (start < end) {
    let currentCapacity =
      (end - start) * Math.min(heights[start], heights[end]);
    maxCapacity = Math.max(currentCapacity, maxCapacity);
    if (heights[start] < heights[end]) {
      start++;
    } else {
      end--;
    }
  }
  return maxCapacity;
}

let waterHeights1 = [3, 9, 4, 1, 5, 4, 7, 1, 7];
console.log(containerWithMostWater(waterHeights1));