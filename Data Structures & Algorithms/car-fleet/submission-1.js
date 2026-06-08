class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = [];

        for(let i = 0; i < position.length; i++){
            cars.push({pos:position[i], speed: speed[i]})
        }

        cars.sort((a, b) => b.pos - a.pos);

        const stack = [];

        for(let car of cars){
            const time = (target - car.pos)/car.speed;

            if(stack.length === 0 || time > stack[stack.length-1]){
                stack.push(time);
            }
        }
        return stack.length;
    }
}
