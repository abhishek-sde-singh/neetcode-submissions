class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n = s.length,
            ans = 0,
            i = 0,
            j = 0,
            map = new Map();

        while (j < n) {
            if (map.has(s[j]) && map.get(s[j]) >= i) {
                i = map.get(s[j]) + 1;
            }

            map.set(s[j], j);
            let len = j - i + 1;
            j++;
            ans = Math.max(len, ans);
        }
        return ans;
    }
}
