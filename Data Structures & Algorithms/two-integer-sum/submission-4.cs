public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> dict = new();
        for(int i = 0; i < nums.Length; i++){
            int x = target - nums[i];
            if(dict.ContainsKey(x)){
                return new int[]{dict[x], i};
            }
            dict[nums[i]] = i;
        }
        return new int[]{};
    }
}
