// Create a function that accepts two strings and checks if the anagram formed is correct.

function AnagramCheck(str1, str2) {
  // algorithm
  // check if the length of the 2 strimgs are equal
  // create 2 counter objects
  // iterate, count and set the keys of each substrings in the strings provided
  // check if the keys of the first counter object matches that in the second counter object
  // check if the value of the key of the first counter object matches that of the values of the key in the second counter object
  if (str1.length !== str2.length) {
    return false;
  }
  // create 2 counter objects
  let counterObject1 = {};
  let counterObject2 = {};
  // count and set the keys of each substrings in the strings provided
  for (let char of str1) {
    // check if the key has a value and increase it
    counterObject1[char] = (counterObject1[char] || 0) + 1;
  }

  for (let char of str2) {
    // check if the key has a value and 1 to it
    counterObject2[char] = (counterObject2[char] || 0) + 1;
  }
  for (let key in counterObject1) {
    if (
      !(key in counterObject2) ||
      counterObject2[key] !== counterObject1[key]
    ) {
      return false;
    }
  }
  return true;
}

console.log(AnagramCheck("cinema", "icrman"));
