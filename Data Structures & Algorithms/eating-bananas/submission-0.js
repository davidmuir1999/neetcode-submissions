class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let optimalK = right;

        while(left <= right){
           const  mid = Math.floor(left + (right - left)/2);

            let hoursNeeded = 0;
            for(const pile of piles){
                hoursNeeded += Math.ceil(pile/mid);
            }

            if(hoursNeeded <= h ){
                optimalK = mid;
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return optimalK;
    }
}
