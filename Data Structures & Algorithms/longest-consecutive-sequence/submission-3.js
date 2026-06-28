class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0){
            return 0;
        }

        const numSet = new Set(nums);

        let longestStreak = 0;

        for(const num of numSet){
            let currNum = num;
            let currStreak = 1;

            while(numSet.has(currNum + 1)){
                currNum += 1;
                currStreak += 1;
            }

            longestStreak = Math.max(currStreak, longestStreak)
        }

        return longestStreak;
    }
}
