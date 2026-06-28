class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for(let i = 0; i < nums.length; i++){
            const currNum = nums[i]
            const remaining = target - currNum;

            if(map.has(remaining)){
                return [map.get(remaining), i]
            } else {
                map.set(currNum, i)
            }
        }
    }
}
