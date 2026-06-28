class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const formatStr = s.toLowerCase().replace(/[^a-z0-9]/g,"");
        let left = 0;
        let right = formatStr.length - 1;

        while(left < right){
            if(formatStr[left] != formatStr[right]){
                return false
            }

            left++;
            right--;
        }

        return true;
    }
}
