function palindromicSubstrings(str) {
  let count = 0;

  function expandAroundCenter(str, start, end) {
    while (start >= 0 && end < str.length && str[start] === str[end]) {
      count++;
      start--;
      end++;
    }
    retur
  }
  for (let i = 0; i < str.length; i++) {
    expandAroundCenter(str, i, i);
    expandAroundCenter(str, i, i + 1);
  }

  return count;
}


let str = "abcd";

console.log(palindromicSubstrings(str)); 


