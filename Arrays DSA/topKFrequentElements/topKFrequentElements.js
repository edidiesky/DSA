function topKFrequentElements(nums, k) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const sortedFreq = Array.from(map.keys()).sort((a, b) => {
    return map.get(b) - map.get(a);
  });

  return sortedFreq.slice(0, k);
}

let nums = [1, 2, 2, 3, 3, 3];
let k = 2;
console.log(topKFrequentElements(nums, k));
