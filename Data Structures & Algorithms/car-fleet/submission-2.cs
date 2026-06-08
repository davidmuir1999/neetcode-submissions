public class Solution {
    public int CarFleet(int target, int[] position, int[] speed) {
        if(position.Length == 0) return 0;

        Array.Sort(position,speed);

        Stack<double> stack = new Stack<double>();

        for(int i = position.Length - 1; i >= 0; i--){
            double time = (double)(target - position[i])/speed[i];

            if(stack.Count == 0 || time > stack.Peek()){
                stack.Push(time);
            }
        }
        return stack.Count;
    }
}
