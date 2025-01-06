function characterReplacement(str, k) {
  let start = 0;
  let charMap = new Map();
  let longestStreak = 0;
  let maxCount = 0;
  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    charMap.set(char, (charMap.get(char) || 0) + 1);
    maxCount = Math.max(maxCount, charMap.get(char));
    while (end - start + 1 - maxCount > k) {
      charMap.set(str[start], charMap.get(str[start]) - 1);
      start++;
    }
    longestStreak = Math.max(longestStreak, end - start + 1);
  }
  return longestStreak;
}

let s = "XYYX";
let k = 2;

console.log(characterReplacement(s, k));
