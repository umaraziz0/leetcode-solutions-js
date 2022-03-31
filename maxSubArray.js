//leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  let max = nums[0];
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    console.log(current);
    console.log(max);

    current = Math.max(current + nums[i], nums[i]);
    max = Math.max(max, current);

    console.log(max);
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([1]));
// console.log(maxSubArray([5, 4, -1, 7, 8]));
