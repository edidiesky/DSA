function deepEqual(val1, val2) {
  if (val1 === val2) return true;
  //    check if the typeof val1, val2 is not object and they are null
  if (
    typeof val1 !== "object" ||
    typeof val2 !== "object" ||
    val1 === null ||
    val2 === null
  ) {
    return false;
  }
  //   get the keys of val1, and val2
  let keys1 = Object.keys(val1); // => ["a", "b"]
  let keys2 = Object.keys(val2);

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(val1[key], val2[key])) {
      return false;
    }
  }
  return true;
}

/**
 * Explanation:
 * No. of fn argument => 3
 * curried(1): args=[1], since 1 < 3, return curried(1, ...moreArgs)
 * curried(1)(2): args=[1,2], since 2 < 3, return curried(1,2, ...moreArgs)
 * curried(1)(2)(3): args=[1,2,3], since 3 = 3, return curried(1,2,3)
 * fn(1,2,3)=> 1+2+3= 6
 *
 */
