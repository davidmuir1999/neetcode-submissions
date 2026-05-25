public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        var dict = new Dictionary<string, List<string>>();

        foreach(string str in strs){
            char[] chars = str.ToCharArray();
            Array.Sort(chars);
            string sortedStr = new string(chars);

            if(!dict.ContainsKey(sortedStr)){
                dict.Add(sortedStr, new List<string>());
            }

            dict[sortedStr].Add(str);
        }
        return dict.Values.ToList();
    }
}
