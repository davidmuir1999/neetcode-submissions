class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const formatString = s.toLowerCase().replace(/[^a-z0-9]/g,'');
        return formatString === formatString.split('').reverse().join('');
    }
}
