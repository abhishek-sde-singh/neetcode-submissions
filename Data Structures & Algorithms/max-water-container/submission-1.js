class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0,
            j = heights.length - 1;
        let ans = 0;

        while (i < j) {
            let area = (j - i) * Math.min(heights[i], heights[j]);
            ans = Math.max(area, ans);
            if (heights[i] < heights[j]) i++;
            else if (heights[i] > heights[j]) j--;
            else i++;
        }

        return ans;
    }
}
