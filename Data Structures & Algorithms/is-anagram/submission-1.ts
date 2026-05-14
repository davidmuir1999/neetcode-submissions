class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length != t.length) return false;

        const count: Record<string, number> = {};

        for(let char of s){
            count[char] = (count[char] || 0) + 1;
        }

        for(let char of t){
            if (!count[char]) return false;
            count[char]--
        }
        return true;
    }
}
