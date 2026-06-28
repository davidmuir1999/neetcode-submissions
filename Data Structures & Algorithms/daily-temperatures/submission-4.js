class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const result = new Array(temperatures.length).fill(0);

        for(let i = 0; i < temperatures.length; i++){
            const currentTemp = temperatures[i];

            while(stack.length > 0 && currentTemp > temperatures[stack[stack.length - 1]]){
                const waitingDaysIndex = stack.pop();

                const daysWaited = i - waitingDaysIndex;

                result[waitingDaysIndex] = daysWaited;
            }

            stack.push(i);
        }

        return result;
    }
}

