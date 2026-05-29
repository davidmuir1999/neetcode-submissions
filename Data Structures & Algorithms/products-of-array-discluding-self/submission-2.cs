public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int length = nums.Length;
        int[] output = new int[length];

        output[0] = 1;
        for(var i = 1; i < length; i++){
            output[i] = output[i-1] * nums[i-1];
        }

        int multiplier = 1;
        for(var i = length -1; i >= 0; i--){
            output[i] = multiplier * output[i];
            multiplier = multiplier * nums[i];
        }

        return output;
        
    }
}
