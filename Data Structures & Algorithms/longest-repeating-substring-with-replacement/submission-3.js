class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const charCount = {};
        let left = 0;
        let maxFreq = 0;
        let longest = 0;

        for(let right = 0; right < s.length; right++){
            const rightChar = s[right];
            charCount[rightChar] = (charCount[rightChar] ?? 0) + 1;

            maxFreq = Math.max(maxFreq, charCount[rightChar]);

            const currentWindow = right - left + 1;

            if(currentWindow - maxFreq > k){
                const leftChar = s[left];
                charCount[leftChar]-= 1;
                left++;
            }

            longest = Math.max(longest, right - left + 1);
        }

        return longest;
    }
}
