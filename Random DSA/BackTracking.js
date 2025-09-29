// --------------- PERMUTATION --------------//
function casePermutation(str) {
  // result
  const result = [];
  function dfs(i, str, slate) {
    // base case
    if (i === str.length) {
      result.push(slate.join(""));
      return;
    }
    // pivot case
    let char = str[i];
    // conditions
    // console.log(slate);
    if (!Number.isInteger(parseInt(char))) {
      slate.push(char.toUpperCase());
      dfs(i + 1, str, slate);
      slate.pop();

      slate.push(char.toLowerCase());
      dfs(i + 1, str, slate);
      slate.pop();
    } else {
      slate.push(char);
      dfs(i + 1, str, slate);
      slate.pop();
    }
    console.log(slate);

    // backtrack
  }
  dfs(0, str, []);
  return result;
}

console.log(casePermutation("ae3i"));
