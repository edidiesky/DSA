//Two pointer:- TC:O(n) SC: O(n)
function isValidPalindrome1(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    let left = 0
    let right = str.length - 1
    while(left < right){
        if(str[left] !== str[right]) return false
        left++
        right--
    }
    return true
}

let str1 ="A man, a plan, a canal: Panama";
console.log(isValidPalindrome1(str1));
// console.log(isValidPalindrome1(str1));
let str2 ="Hello World";
console.log(isValidPalindrome1(str2));
// console.log(isValidPalindrome1(str2));