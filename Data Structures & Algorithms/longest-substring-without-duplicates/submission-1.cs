public class Solution {
    public int LengthOfLongestSubstring(string s) {
        HashSet<char> charSet = new HashSet<char>();

        int left = 0;
        int longest = 0;

        for(int right = 0; right < s.Length; right++){
            while(charSet.Contains(s[right])){
                charSet.Remove(s[left]);
                left++;
            }

            charSet.Add(s[right]);

            longest = Math.Max(longest, right - left + 1);
        }

        return longest;
    }
}
