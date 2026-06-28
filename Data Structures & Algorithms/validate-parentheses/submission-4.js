class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        if(s.length <= 1) return false;

        const dictionary = {
            ")": "(",
            "]": "[",
            "}": "{"
        };

        let stack = [];

        for(let i = 0; i < s.length; i++){
            if(s[i] === "(" || s[i] === "{" || s[i] === "["){
                stack.push(s[i]);
            }

            if(s[i] === ")" || s[i] === "}" || s[i] === "]"){
                const top = stack.pop();
                
                if(dictionary[s[i]] != top){
                    return false;
                }
            }
        }

        return stack.length == 0;
    }
       
}
