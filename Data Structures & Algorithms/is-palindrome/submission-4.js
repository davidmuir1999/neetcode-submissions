class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // const formatString = s.toLowerCase().replace(/[^a-z0-9]/g,'');
        // return formatString === formatString.split('').reverse().join('');
        const formatStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let left = 0;
        let right = formatStr.length - 1;

        while (left < right) {
            if (formatStr[left] != formatStr[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
