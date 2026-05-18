public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> dict = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++){
            int currentNumber = nums[i];
            int complement = target - currentNumber;

            if(dict.TryGetValue(complement, out int complementIndex)){
                return [complementIndex, i];
            }

            dict[currentNumber] = i;
        }
        return [];
    }
}
