class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0,
            j = nums.length - 1;

        while (i < j) {
            let left = nums[i];
            let right = nums[j];
            let sum = left + right;

            if (sum === target) {
                return [i + 1, j + 1];
            } else if (sum > target) {
                j--;
            } else {
                i++;
            }
        }
    }
}
