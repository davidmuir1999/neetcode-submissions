class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVolume = 0;
        let left = 0;
        let right = heights.length - 1;

        while(left < right){
            const width = right - left;
            const currentHeight = Math.min(heights[left], heights[right]);
            const currentVolume = width * currentHeight;

            maxVolume = Math.max(maxVolume, currentVolume);

            if(heights[left] < heights[right]){
                left++;
            } else {
                right--;
            }
        }

        return maxVolume;
    }
}
