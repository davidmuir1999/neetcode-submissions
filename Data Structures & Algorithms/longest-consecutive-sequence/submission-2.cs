public class Solution {
    public int LongestConsecutive(int[] nums) {
        if(nums.Length == 0){
            return 0;
        }

        HashSet<int> numsSet = new HashSet<int>(nums);

        int longestStreak = 0;

        foreach(int num in numsSet){
            if(!numsSet.Contains(num - 1)){
                int currentNum = num;
                int currentStreak = 1;

                while(numsSet.Contains(currentNum + 1)){
                    currentNum++;
                    currentStreak++;
                }
                longestStreak = Math.Max(longestStreak, currentStreak);
            }
        }
        return longestStreak;
    }
}
