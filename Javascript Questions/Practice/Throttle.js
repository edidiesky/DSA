function Throttle(fn, t) {
    let lastTime = 0
    return function(...args) {
        const now = Date.now()
        if(now - lastTime >= t) {
            fn(...args)
            lastTime = now
        }
    }
}