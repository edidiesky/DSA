**Description:**
Given an array of positive integers `nums` and a positive integer `target`, return the minimal length of a contiguous
subarray whose sum is greater than or equal to `target`. If there is no such subarray, return `0` instead.

### Examples:
#### Example 1:

Input: target = 7, nums = [2,4,1,2,4,3]
Output: 2

#### Example 2:
Input: target = 15, nums = [2, 2, 2, 2, 2]
Output: 0

**Algorithmic Steps:**
This problem is solved with the help of **sliding window** approach without using any special data structure. The algorithmic approach can be summarized as follows:

1. Initialize left and right pointers to 0, to keep track of the substring wi
1. dow boundaries.

2. Initialize total variable to 0, to store the sum of the subarray values to meet the target criteria.

3. Initialize result variable to max integer value to indicate that there is no subarray to meet target value.

4. Iterate over the input array using right pointer until the end of the string. 

5. Calculate the total value by adding array value at respective right pointer.

6. If the total value is greater or equal to target, find the minimum of subarray sum and shrink the current window total and left pointer value. This step need to be repeated until there are no subarray exists to meet the target criteria.

7. Increment the right pointer to find the next subarray.

8. Repeat steps 4–7 until the right pointer reaches the end of the array.

9. Return 0 if the result is still a maximum integer which indicates no valid subarray otherwise return the calculated minimum subarray value.

**Time and Space complexity:**
This algorithm has a time complexity of O(n) because we are traversing the array only twice at max. Since it doens't require any datastructure, the space complexity will be O(1).