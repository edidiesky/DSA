// BASE APPROACH
const fibonnaci = (n, memo = new Map()) => {
  if (memo.has(n)) return memo.get(n);
  if (n <= 2) return 1;
  if (n <= 0) return 0;
  let result = fibonnaci(n - 1, memo) + fibonnaci(n - 2, memo);
  memo.set(n, result);
  return memo.get(n);
};

/**
 * DRY CODING
 * fib(4) = fib(3, memo) + fb(2, memo)
 * 3 <= 2, fib(3, memo) = fib(2, memeo) + fib(1, memo)
 * 2 <=2 = 1, fib(2, memo) = 1, memo = {2:1}
 * 1 <=2 = 1, fib(1, memo) = 1, memo = {2:1, 1:1}
 * fib(3, memo) = 2, memo = {3:2, 2:1, 1:1}
 * fib(4, memo) = 3, memo = {3:2, 2:1, 1:1, 4:1}
 */

/**
 * GRID TRAVELLER PROBLEM
 * | -
 * Memoized the solution
 */

const gridTraveller = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 1;
  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 2));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 3));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(18, 18));

// 1, 2 => 0, 2, 1, 1
