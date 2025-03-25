function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...moreArgs) {
      return curried(...args, ...moreArgs);
    };
  };
}

let sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1,2)(3));
console.log(curriedSum(1,2,3));

/**
 * Explanation:
 * No. of fn argument => 3
 * curried(1): args=[1], since 1 < 3, return curried(1, ...moreArgs)
 * curried(1)(2): args=[1,2], since 2 < 3, return curried(1,2, ...moreArgs)
 * curried(1)(2)(3): args=[1,2,3], since 3 = 3, return curried(1,2,3)
 * fn(1,2,3)=> 1+2+3= 6
 * 
 */
