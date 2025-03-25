function Curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn(...args)
        }

        return function(...otherArgs) {
            return fn(...args, ...otherArgs)
        }
    }
}

const sum = (a,b,c)=> a+b+c
