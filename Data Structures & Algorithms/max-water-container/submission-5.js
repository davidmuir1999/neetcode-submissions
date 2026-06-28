class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //input is interger array
        //expected output a single integer

        //edge cases -> can recieve up to 1000 bars so perfromance optimisation is required
        // we wont recieve anything less that 2 bars so volume cannot be null

        //calculate 2D volume width (index between bars) * height (min height between two bars)

        let maxVol = 0;
        let left = 0;
        let right = heights.length - 1;

        while(left < right){
            const width = right - left;
            const currHeight = Math.min(heights[left], heights[right]);

            const currVol = width * currHeight;

            maxVol = Math.max(currVol, maxVol);

            if(heights[left] < heights[right]){
                left++;
            } else {
                right--;
            }
        }
        return maxVol;
    }
}
