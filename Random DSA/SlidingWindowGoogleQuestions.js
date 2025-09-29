// ************ BACKTRACKING PROBLEM *******************/

function maxUniqueSplits(str) {
  function backTrack(start, seen) {
    // 1. we need the maxSplit
    // 2. iterate from the start + 1 and get the substrings
    // 3. Use the substrings to check if it exists in the seen objects
    // 4. If the substrings deos not exists add it and get the splits count
    // 5. Find the maxCounts
    // 6. Remove the substrings
    //
    let maxSplit = 0;
    for (let end = start + 1; end <= str.length; end++) {
      let substrings = str.substring(start, end);
      if (!seen.has(substrings)) {
        seen.add(substrings);
        let split = 1 + backTrack(end, seen);
        maxSplit = Math.max(maxSplit, split);
      }
    }
    return maxSplit;
  }
  return backTrack(0, new Set());
}



console.log(maxUniqueSplits("ababccc"));
// console.log(maxUniqueSplits("abcdef"));
