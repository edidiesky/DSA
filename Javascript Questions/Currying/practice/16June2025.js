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
let curriedSum = curry(sum);
// Case 1: console.log("curried Sum:", curriedSum(1)(2)(3));
// Case 2: console.log("curried Sum:", curriedSum(1,2)(3));
// Case 3: console.log("curried Sum:", curriedSum(1,2,3));
/**
 * Definition: It is a pattern in functional programming that decompose a function with 
 * multiple argument into a series of function each taking a single argument.
 * Explanation:
 * Step1:
 * fn = sum, fn.length = 3, curried(1): ...args = 1
 * since 1 < 3: curried(1, ...moreArgs)
 * 
 */
