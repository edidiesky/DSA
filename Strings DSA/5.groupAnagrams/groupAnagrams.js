function groupAnagrams(str) {
  let map = new Map();
  for (let char of str) {
    const sortedString = [...char].sort().join("");
    // console.log(sortedString);
    if (!map.has(sortedString)) {
      map.set(sortedString, []);
    }
    map.get(sortedString).push(char);
  }

  return Array.from(map.values())
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// console.log(groupAnagrams(strs));
