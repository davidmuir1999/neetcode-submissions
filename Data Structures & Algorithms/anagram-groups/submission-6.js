class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(const s of strs){
            const sortedStr = s.split('').sort().join('');

            if(!map.has(sortedStr)){
                map.set(sortedStr, []);
            }

            map.get(sortedStr).push(s);
        }

        return Array.from(map.values());
    }
}
