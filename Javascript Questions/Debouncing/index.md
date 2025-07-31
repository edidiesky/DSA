1. Explain what Debouncing is.
2. Write a Debouncing function.
3. Drycode the function.

Suppose we have a function 
log = (x) => console.log(x), create a debounced version:
debouncedLog = debounce(log, 1000);

function db(fn, t) {
    let timer = 0
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(()=> fn(...args), t)
    }
}