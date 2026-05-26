public class Solution {

    public string Encode(IList<string> strs) {
        string result = "";
        foreach(string str in strs){
            result += str.Length + "#" + str;
        }
        return result;
    }

    public List<string> Decode(string s) {
        List<string> result = new List<string>();
        int i = 0;

        while(i < s.Length){
            int j = i;
            while(s[j] != '#'){
                j++;
            }

            int wordLength = int.Parse(s.Substring(i, j-i));
            int startWord = j + 1;

            string word = s.Substring(startWord, wordLength);
            result.Add(word);

            i = startWord + wordLength;
        }
        return result;
   }
}
