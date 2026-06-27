class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if(intervals.length == 0) return 0;

        intervals.sort((a,b) => a[0] - b[0]);
        
        let count = 0;
        let prevEnd = intervals[0][1];
        
        for(let i = 1; i < intervals.length; i++){
            const currentStart = intervals[i][0];
            const currentEnd = intervals[i][1];

            if(prevEnd > currentStart){
                count++;
                prevEnd = Math.min(prevEnd, currentEnd)
            } else{
                prevEnd = currentEnd;
            }
        }

        return count;
        
    }
}
