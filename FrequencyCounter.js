// Create a function that accepts two strings and checks if the anagram formed is correct.

function AnagramCheck(str1, str2) {
  if(str1.length !== str2.length) return false
  let charMap = new Map()
  for(let i=0; i < str1.length; i++) {
    charMap.set(str1[i], (charMap.get(str1[i]) || 0) + 1)
  }

  for(let char of str2) {
    if (charMap.get(char) === 0 || !charMap.has(char)) {
      return false
    }
    charMap.set(char, (charMap.get(char)) - 1)
  }
  return true
}

console.log(AnagramCheck("icrman", "icrn"));
