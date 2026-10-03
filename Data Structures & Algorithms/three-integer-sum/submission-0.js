class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let ans = [];
        nums.sort((a, b) => a - b);

        function twoSum(nums, x) {
            let i = x + 1,
                j = nums.length - 1;

            while (i < j) {
                let sum = nums[i] + nums[j] + nums[x];

                if (sum > 0) j--;
                else if (sum < 0) i++;
                else {
                    ans.push([nums[i], nums[j], nums[x]]);
                    (i++, j--);

                    while (i < j && nums[i] === nums[i - 1]) i++;
                    while (i < j && nums[j] === nums[j + 1]) j--;
                }
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
                twoSum(nums, i);
            }
        }

        return ans;
    }
}
