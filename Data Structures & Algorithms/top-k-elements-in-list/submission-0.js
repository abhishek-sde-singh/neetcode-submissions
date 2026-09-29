class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        let pq = new MinPriorityQueue((e) => e.freq);

        for (let [key, freq] of map) {
            pq.push({ key, freq });
            if (pq.size() > k) {
                pq.pop();
            }
        }

        return pq.toArray().map((x) => x.key);
    }
}
