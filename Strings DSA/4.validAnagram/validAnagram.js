function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let charCount = new Map();

  // Build the frequency map for str1
  for (let char of str1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Check characters in str2 against the map
  for (let char of str2) {
    if (!charCount.has(char) || charCount.get(char) === 0) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
  }

  return true;
}

console.log(validAnagram("anagram", "nagarams")); // true
