class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while(stones.length > 1){
            stones.sort((a,b) => a - b);
            let current = stones.pop() - stones.pop();
            if (current) {
                stones.push(current);
            }
        }
        return stones.length ? stones[0] : 0;
    }
}
