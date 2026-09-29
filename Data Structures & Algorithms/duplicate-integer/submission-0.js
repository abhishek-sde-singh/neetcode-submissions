class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();

        for (const val of nums) {
            if (set.has(val)) return true;
            set.add(val);
        }

        return false;
    }
}
