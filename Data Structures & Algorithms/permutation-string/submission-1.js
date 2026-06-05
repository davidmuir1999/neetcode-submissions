class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length){
            return false;
        }

        const s1Count = {};
        const windowCount = {};

        for(let char of s1){
            s1Count[char] = (s1Count[char] || 0) + 1;
        }

        const isMatch = () => {
            for(let char in s1Count){
                if(s1Count[char] !== (windowCount[char])){
                    return false;
                }
            }
            return true;
        }

        let left = 0;

        for(let right = 0; right < s2.length; right++){
            const charRight = s2[right];

            windowCount[charRight] = (windowCount[charRight] || 0) + 1;

            if((right - left) + 1 > s1.length){
                const charLeft = s2[left];
                windowCount[charLeft]--;
                left++;
            }

            if((right - left) + 1 === s1.length){
                if(isMatch()) return true;
            }
        }
        return false;
    }
}
