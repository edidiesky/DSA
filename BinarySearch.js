function binarySearch(array, num){
  // add whatever parameters you deem necessary - good luck!
  // check if the length is 0 and return -1 is true
  if(array.length === 0) return -1
 //  create a start, end and middle point
 let start = 0
 let end  = array.length - 1
 let middle  = Math.floor((end + start) / 2)
 //  loop through while the middle value is not equal to the num value
 while (array[middle] !== num && start <= end) {
       // and also loop while the start value is less than or equal to the end value
     if(array[middle] > num) return end = middle - 1
     else {start = middle + 1}
     //   check if the num value is less than the middle value
     middle  = Math.floor((end + start) / 2)
 }
 //  if true return end value as the midde  -1
// else start value is  = middle + -1 
 array[middle] === num ? middle:-1

}
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  100
); 