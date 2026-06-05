public class Solution {
    public int CharacterReplacement(string s, int k) {
        var charCount = new Dictionary<char,int>();

        int left = 0;
        int maxFreq = 0;
        int longest = 0;

        for(int right = 0; right < s.Length; right++){
            char rightChar = s[right];

            charCount[rightChar] = charCount.GetValueOrDefault(rightChar) + 1;

            maxFreq = Math.Max(maxFreq, charCount[rightChar]);

            int window = (right - left) + 1;
            if(window - maxFreq > k){
                char leftChar = s[left];
                charCount[leftChar] = charCount.GetValueOrDefault(leftChar) - 1;
                left++;
            }

            longest = Math.Max(longest, (right - left) + 1);
        }
        return longest;
    }
}
