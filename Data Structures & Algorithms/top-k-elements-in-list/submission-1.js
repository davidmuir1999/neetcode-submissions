class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for(let num of nums){
            map.set(num, (map.get(num) || 0) + 1);
        }

        let sorted = new Map([...map].sort((a, b) => b[1] - a[1]));

        return [...sorted.keys()].slice(0,k);

    }
}
