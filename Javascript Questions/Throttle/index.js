function Throttle(fn, t) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= t) {
      fn(...args);
      lastCall = now;
    }
  };
}

const fn = (x) => console.log(x);
const throttled = Throttle(fn, 1000);
throttled(1); // Logs 1
throttled(2); // Ignored
setTimeout(() => throttled(3), 1000);
throttled(2); // Ignored


/**
 * Explanation:
 */
