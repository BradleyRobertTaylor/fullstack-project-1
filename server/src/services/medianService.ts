export const medianFromList = (nums: number[]) => {
  const mid = Math.floor(nums.length / 2);
  return nums.length % 2 !== 0 ? [nums[mid]] : nums.slice(mid - 1, mid + 1);
};
