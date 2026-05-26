class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result: string = "";
        for(let str of strs){
            result += str.length + '#' + str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result = [];
        let i = 0;

        while(i < str.length){
            let j = i;
            while(str[j] != "#"){
                j++;
            }

            let strLength = parseInt(str.substring(i,j));

            let startWord = j + 1;
            let endWord = startWord + strLength;

            let word = str.substring(startWord,endWord);
            result.push(word);

            i = endWord;
        }
        return result;
    }
}
