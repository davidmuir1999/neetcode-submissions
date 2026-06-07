public class Solution {
    public int[] DailyTemperatures(int[] temperatures) {
        Stack<int> stack = new Stack<int>();

        int[] result = new int[temperatures.Length];

        for(int i = 0; i < temperatures.Length; i++){
            int currentTemp = temperatures[i];

            while(stack.Count > 0 && currentTemp > temperatures[stack.Peek()]){
                int waitingDayIndex = stack.Pop();

                int daysWaiting = i - waitingDayIndex;

                result[waitingDayIndex] = daysWaiting;
            }
            stack.Push(i);
        }
        return result;
    }
}
