class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seenMap = new Map();
        for(let i = 0; i < nums.length; i++){
            const currentNumber = nums[i];
            const complement = target - currentNumber;

            if(seenMap.has(complement)){
                return [seenMap.get(complement), i];
            }

            seenMap.set(currentNumber,i);
        }

        return [];
    }
}
