function palindromicSubstrings(str) {
  let start = 0;
  let end = 0;

  function expandAroundCenter(str, start, end) {
    while (start >= 0 && end < str.length && str[start] === str[end]) {
      start--;
      end++;
    }
    return end - start - 1;
  }
  for (let i = 0; i < str.length; i++) {
    let len1 = expandAroundCenter(str, i, i);
    let len2 = expandAroundCenter(str, i, i + 1);
    let len = Math.floor((len1 + len2) / 2);

    while (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return str.substring(start, end + 1);
}

let str = "ababd";

console.log(palindromicSubstrings(str));
