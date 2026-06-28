class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length -1];
    }

    /**
     * @return {number}
     */
    getMin() {
        const temp = [];

        let mini = this.stack[this.stack.length - 1];

        while(this.stack.length > 0){
            mini = Math.min(mini, this.stack[this.stack.length - 1]);

            temp.push(this.stack.pop())
        }

        while(temp.length > 0){
            this.stack.push(temp.pop())
        }

        return mini;
    }
}
