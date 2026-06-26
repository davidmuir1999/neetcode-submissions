class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(intervals.length === 0) return [];

        intervals.sort((a,b) => a[0] - b[0]);

        const res = [intervals[0]];

        for(let i = 1; i < intervals.length; i++){

            const lastMerged = res[res.length - 1];
            const current = intervals[i];

            if(current[0] <= lastMerged[1]){
                lastMerged[1] = Math.max(lastMerged[1], current[1])
            } else {
                res.push(current)
            }
        }
        return res;
    }
}
