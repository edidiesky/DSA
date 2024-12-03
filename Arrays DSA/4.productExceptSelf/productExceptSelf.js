function productExceptSelf(nums) {
  const answer = Array.from(nums).fill(1);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= postfix;
    postfix *= nums[i];
  }
  return answer;
}

const nums = [1, 2, 3, 4, 5];
console.log(productExceptSelf(nums));
