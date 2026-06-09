class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let left = 0;
        let right = (rows*cols) - 1;

        while(left <= right){
            const mid = Math.floor(left + (right - left)/2);

            const midRow = Math.floor(mid/cols);

            const midCol = mid % cols;

            const midValue = matrix[midRow][midCol];

            if(midValue === target){
                return true
            } else if (midValue < target){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }
}
