class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVolume = 0;

        for(let i = 0; i < heights.length - 1 ; i++){
            let right = heights.length - 1;
            let currentVolume  = 0;

            while(i < right){
                if(heights[i] < heights[right]){
                    currentVolume = heights[i] * (right - i);
                } else {
                    currentVolume = (right - i) * heights[right];
                }
                maxVolume = Math.max(maxVolume, currentVolume);
                right--;
            }
             
        }
        return maxVolume;
    }
}
