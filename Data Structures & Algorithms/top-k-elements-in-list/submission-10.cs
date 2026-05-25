public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        var dict = new Dictionary<int, int>();

        foreach(int num in nums){
            if(!dict.ContainsKey(num)){
                dict[num] = 1;
            } else {
                dict[num] += 1;
            }
        }

        return dict
        .OrderByDescending(kvp => kvp.Value)
        .Take(k)
        .Select(x => x.Key)
        .ToArray();
    }
}
