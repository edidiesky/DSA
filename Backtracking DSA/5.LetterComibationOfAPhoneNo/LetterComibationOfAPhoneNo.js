function LetterComibationOfAPhoneNo(digits) {
  let result = [];
  let phonedigits = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  function backTrack(index, currentSubset) {
    if (index === digits.length) {
      result.push(currentSubset.join(""));
      return;
    }

    let letters = phonedigits[digits[index]];
    for (let letter of letters) {
      // "a", "b", "c"
      currentSubset.push(letter); //["a","d", "c"]
      backTrack(index + 1, currentSubset);
      currentSubset.pop();
    }
  }

  backTrack(0, []);
  return result;
}

console.log(LetterComibationOfAPhoneNo("34"));
