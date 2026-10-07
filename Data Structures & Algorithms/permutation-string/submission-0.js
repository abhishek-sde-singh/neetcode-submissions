class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let n = s1.length,
            m = s2.length;

        if (n > m) return false;

        let hash1 = new Array(26).fill(0);
        let hash2 = new Array(26).fill(0);

        for (let i = 0; i < n; i++) {
            let index1 = s1.charCodeAt(i) - 97;
            hash1[index1]++;

            let index2 = s2.charCodeAt(i) - 97;
            hash2[index2]++;
        }

        let i = 0,
            j = n - 1;

        while (j < m) {
            if (isHashSame(hash1, hash2)) {
                return true;
            } else {
                hash2[s2.charCodeAt(i) - 97]--;
                i++;
                j++;
                hash2[s2.charCodeAt(j) - 97]++;
            }
        }

        return false;
    }
}

function isHashSame(hash1, hash2) {
    for (let i = 0; i < 26; i++) {
        if (hash1[i] !== hash2[i]) {
            return false;
        }
    }

    return true;
}
