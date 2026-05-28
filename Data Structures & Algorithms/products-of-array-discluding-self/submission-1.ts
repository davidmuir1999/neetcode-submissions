class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const length: number = nums.length;
        let output = new Array(length);

        output[0] = 1;
        for(let i = 1; i < length; i++){
            output[i] = output[i-1] * nums[i-1];
        }

        let multiplier: number = 1;
        for(let i = length - 1; i >= 0; i--){
            output[i] = multiplier * output[i];

            multiplier = multiplier * nums[i]
        }
        return output;
    }
}
