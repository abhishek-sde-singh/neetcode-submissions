class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        let left = [],
            right = [];
        ((left[0] = prices[0]), (right[n - 1] = prices[n - 1]));

        for (let i = 1; i < prices.length; i++) {
            left[i] = Math.min(left[i - 1], prices[i]);
        }

        for (let i = n - 2; i >= 0; i--) {
            right[i] = Math.max(right[i + 1], prices[i]);
        }

        let ans = 0;

        for (let i = 0; i < n; i++) {
            ans = Math.max(ans, right[i] - left[i]);
        }
        return ans;
    }
}
