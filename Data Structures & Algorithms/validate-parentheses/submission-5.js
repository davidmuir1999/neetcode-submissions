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

        for(let c of s){
            if(dictionary[c]){
                if(stack.length > 0 && stack[stack.length - 1] === dictionary[c]){
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c)
            }
        }

        return stack.length === 0;
    }
       
}
