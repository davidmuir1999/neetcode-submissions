class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (let str of strs) {
            result += str.length + "#" + str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        let result = [];
        let i = 0;
        while (i < s.length) {
            let j = i;
            while (s[j] !== "#") {
                j++;
            }
            let length = parseInt(s.substring(i, j));
            const wordStart = j + 1;
            const wordEnd = wordStart + length;
            let word = s.substring(wordStart, wordEnd);
            result.push(word);
            i = wordEnd;
        }

        return result;
    }
}
