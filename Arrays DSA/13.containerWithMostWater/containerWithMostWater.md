**Description:**
Given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`. You have to find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.

### Examples
Example 1:
Input: height = [3,9,4,1,5,4,7,1,7]
Output: 49

Example 2:
Input: height = [1,1]
Output: 1

**Time and Space complexity:**
This algorithm has a time complexity of `O(n)`, where `n` is the number of elements. This is because the left or right pointer moved towards the other until they meet in each iteration, the elements are traversed once. 

Here, we don't use any additional datastructure other than two left pointer variables. Hence, the space complexity will be O(1).