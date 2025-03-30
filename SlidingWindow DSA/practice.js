// console.log(getLongestNonRepeatingSubString("aaeagahijbcdefag")); // Output: 8 ("hijbcdef")

function getLongestNonRepeatingSubString(str) {
  let hashMap = new Map();
  let count = 0;
  let start = 0;
  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    hashMap.set(char, (hashMap.get(char) || 0) + 1);
    while (hashMap.get(char) > 1) {
      hashMap.set(str[start], hashMap.get(str[start]) - 1);
      if (hashMap.get(str[start]) === 0) {
        hashMap.delete(str[start]);
      }
      start++;
    }
    count = Math.max(count, end - start + 1);
  }
  return count;
}
console.log(getLongestNonRepeatingSubString("aaaaaaa")); // Output: 8 ("hijbcdef")
