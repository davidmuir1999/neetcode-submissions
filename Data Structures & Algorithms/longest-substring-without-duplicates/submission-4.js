class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let longestStr = 0;
        let left = 0;

        for(let right = 0; right < s.length; right++){

            while(set.has(s[right])){
                set.delete(s[left]);
                left++;
            }

            set.add(s[right]);

            longestStr = Math.max(longestStr, right - left + 1)
        }

        return longestStr
    }
}
