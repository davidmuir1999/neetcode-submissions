class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let longestStr = 0;
        let fast = 0;

        for(let slow = 0; slow < s.length; slow++){

            while(set.has(s[slow])){
                set.delete(s[fast]);
                fast++;
            }

            set.add(s[slow]);

            longestStr = Math.max(longestStr, slow - fast + 1)
        }

        return longestStr
    }
}
