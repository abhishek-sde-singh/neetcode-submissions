class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // return JSON.stringify(strs);
        let res = "";
        for (const str of strs) {
            res += str.length + "#" + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // return JSON.parse(str);
        const result = [];
        let i = 0;

        while (i < str.length) {
            const separator = str.indexOf("#", i);
            const length = Number(str.slice(i, separator));
            const start = separator + 1;
            const end = start + length;
            result.push(str.slice(start, end));
            i = end;
        }
        return result;
    }
}
