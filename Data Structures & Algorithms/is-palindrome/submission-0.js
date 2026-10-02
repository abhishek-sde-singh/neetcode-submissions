function isAlpNum(c) {
    return (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        let i = 0,
            j = s.length - 1;
        while (i < j) {
            let left = s[i].toLowerCase();
            let right = s[j].toLowerCase();

            if (!isAlpNum(left)) i++;
            else if (!isAlpNum(right)) j--;
            else if (left === right) {
                i++;
                j--;
            } else {
                return false;
            }
        }
        return true;
    }
}
