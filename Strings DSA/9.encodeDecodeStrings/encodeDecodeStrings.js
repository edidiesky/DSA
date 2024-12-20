function encodeString(str) {
  let encodedStrings = "";
  for (const char of str) {
    encodedStrings += char.length + "#" + char;
  }
  return encodedStrings;
}

function decodeString(str) {
  let decodedStrStrings = [];
  let i = 0;
  while (i < str.length) {
    let j = i;

    while (str[j] !== "#") {
      j++;
    }

    let start = j + 1;

    let wordlength = Number.parseInt(str.substring(i, j));

    let subString = str.substring(start, start + wordlength);

    decodedStrStrings.push(subString);
    i = start + wordlength;
  }
  return decodedStrStrings;
}

let strs1 = ["learn", "datastructure", "algorithms", "easily"];
let encodedStr1 = encodeStrings(strs1);
console.log(encodedStr1);
console.log(decodeString(encodedStr1));
