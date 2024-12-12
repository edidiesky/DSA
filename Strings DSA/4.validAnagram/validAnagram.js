function validAnagram(str1, str2) {
    let charCount = new Map()
    for (let char of str1) {
        charCount.set(char,(charCount.get(char) || 0) +1)
    }

    for (let char of str2) {
        if(!charCount.has(char)) {
            return false
        }
        charCount.set(char,(charCount.get(char)--)
        
    }

    return true
}