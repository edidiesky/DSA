function checkIfInstanceOf(obj, classFunction) {
    if(obj === null || obj === undefined ||typeof classFunction !== "function" ) {
        return null
    }
    let proto = Object.getPrototypeOf(obj)
    while(proto !== null) {
        if(proto === classFunction.prototype) {
            return true
        }
        proto = Object.getPrototypeOf(obj)
    }
    return false
}

console.log(checkIfInstanceOf(new Date(), Date))