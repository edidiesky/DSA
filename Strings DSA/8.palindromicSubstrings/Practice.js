function palindromicSubstrings(str) {
    let count = 0
    function expandAroundCenter(str, start, end){
        while(start >=0 && end < str.length && start[end] === str[start]) {
            count++
            start++
            end--
        }
        return
    }
    for(let i=0; i < str.length; i++ ){
        expandAroundCenter(str, i, i)
        expandAroundCenter(str, i, i+1)
    }
    return count
}