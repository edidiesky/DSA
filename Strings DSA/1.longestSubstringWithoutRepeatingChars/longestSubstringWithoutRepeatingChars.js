function longestSubstringWithoutRepeatingChars(strings) {
  let char = new Set();
  let maxChar = 0;
  let end = 0;
  let start = 0;

  while (end < strings.length) {
    if (char.has(strings[end])) {
      char.delete(strings[start]);
      start++;
    }

    char.add(strings[end]);
    end++;
    maxChar = Math.max(maxChar, char.size);
  }

  return maxChar;
}
