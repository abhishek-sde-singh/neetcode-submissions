class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let i = 0; i < strs.length; i++) {
            let sortedCurr = strs[i].split("").sort().join("");

            if (!map.has(sortedCurr)) {
                map.set(sortedCurr, []);
            }

            map.get(sortedCurr).push(strs[i]);
        }

        return [...map.values()];
    }
}
