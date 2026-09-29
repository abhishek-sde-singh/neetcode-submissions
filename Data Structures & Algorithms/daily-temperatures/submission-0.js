class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
        let st = [];
        let nextgreater = new Array(temp.length).fill(0);
        let n = temp.length;

        for (let i = n - 1; i >= 0; i--) {
            if (st.length && st[st.length - 1][0] > temp[i]) {
                nextgreater[i] = st[st.length - 1][1] - i;
                st.push([temp[i], i]);
            } else {
                while (st.length && st[st.length - 1][0] <= temp[i]) {
                    st.pop();
                }
                if (st.length) {
                    nextgreater[i] = st[st.length - 1][1] - i;
                }
                st.push([temp[i], i]);
            }
        }
        console.log(nextgreater);
        return nextgreater;
    }
}
