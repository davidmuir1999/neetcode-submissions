public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        var dict = new Dictionary<int, int>();

        foreach(int num in nums){
            dict[num] = dict.GetValueOrDefault(num, 0) + 1;
        }

        return dict
        .OrderByDescending(kvp => kvp.Value)
        .Take(k)
        .Select(x => x.Key)
        .ToArray();
    }
}
