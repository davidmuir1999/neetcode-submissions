class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums) {
        const length = nums.length;
        const output = new Array(length);

 
        output[0] = 1;
        for (let i = 1; i < length; i++) {
            output[i] = output[i - 1] * nums[i - 1];
        }


        let right_multiplier = 1;
        for (let i = length - 1; i >= 0; i--){

            output[i] = output[i] * right_multiplier;


            right_multiplier = right_multiplier * nums[i];
        }

        return output;
    }
}
