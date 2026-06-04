public class Solution {
    public bool IsPalindrome(string s) {
        string formatString = Regex.Replace(s.ToLower(),"[^a-z0-9]","");
        string reversedString = new string(formatString.Reverse().ToArray());
        return formatString == reversedString;
    }
}
