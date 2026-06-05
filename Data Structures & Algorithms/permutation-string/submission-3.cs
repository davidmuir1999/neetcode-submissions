public class Solution {
    public bool CheckInclusion(string s1, string s2) {
        if(s1.Length > s2.Length){
            return false;
        }

        var s1Count = new Dictionary<char, int>();
        var windowCount = new Dictionary<char,int>();

        foreach(char c in s1){
            s1Count[c] = s1Count.GetValueOrDefault(c) + 1;
        }

        bool Matches(){
            foreach(var kvp in s1Count){
                if(windowCount.GetValueOrDefault(kvp.Key) != kvp.Value){
                    return false;
                }
            }
            return true;
        }

        int left = 0;

        for(int right = 0; right < s2.Length; right++){
            char rightChar = s2[right];

            windowCount[rightChar] = windowCount.GetValueOrDefault(rightChar) + 1;

            if((right - left) + 1 > s1.Length){
                char leftChar = s2[left];
                windowCount[leftChar]--;
                left++;
            }

            if((right - left) + 1 == s1.Length){
                if(Matches()) return true;
            }
        }
        return false;
    }
}
