function Curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn(...args)
        }
        return function(...moreArgs) {
            return curried(...args, ...moreArgs)
        }
    }
}
const sum = (a,b,c)=> a+b+c
let Curried = Curry(sum)
console.log(Curried(1)(2)(3))
console.log(Curried(1,2)(3))
console.log(Curried(1,2,3))
