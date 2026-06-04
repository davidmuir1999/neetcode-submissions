public class Solution {
    public int MaxArea(int[] heights) {
        int maxVolume = 0;
        int left = 0;
        int right = heights.Length - 1;

        while(left < right){
            int width = right - left;
            int currentHeight = Math.Min(heights[left], heights[right]);
            int currentVolume = width * currentHeight;

            maxVolume = Math.Max(maxVolume, currentVolume);

            if(heights[left] < heights[right]){
                left++;
            } else {
                right--;
            }
        }
        return maxVolume;
    }
}
