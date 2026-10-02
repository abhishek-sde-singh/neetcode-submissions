class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        // nums.sort((a, b) => a - b);
        let maxi = 1,
            count = 1;
        // for (let i = 0; i < nums.length - 1; i++) {
        //     if (nums[i] === nums[i + 1]) continue;

        //     if (nums[i] + 1 === nums[i + 1]) {
        //         count++;
        //         maxi = Math.max(maxi, count);
        //     } else {
        //         count = 1;
        //     }
        // }
        // return maxi;

        let set = new Set(nums);

        for (let val of set) {
            if (!set.has(val - 1)) {
                while (set.has(val + 1)) {
                    count++;
                    val++;
                }
                maxi = Math.max(maxi, count);
                count = 1;
            }
        }
        return maxi;
    }
}
