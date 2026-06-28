class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for(let i = 0; i < tokens.length; i++){
            if(tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/"){
                const b = stack.pop();
                const a = stack.pop();

                if(tokens[i] === "+"){
                    stack.push(a + b);
                } else if (tokens[i] === "-"){
                    stack.push(a - b);
                } else if(tokens[i] === "*"){
                    stack.push(a * b);
                } else {
                    stack.push(Math.trunc(a / b))
                }
            } else {
                stack.push(Number(tokens[i]));
            }
        }

        return stack[0];
    }
}
