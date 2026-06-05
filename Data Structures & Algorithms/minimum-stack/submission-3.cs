public class MinStack {

    private Stack<int> stack;

    public MinStack() {
        stack = new Stack<int>();
    }
    
    public void Push(int val) {
        stack.Push(val);
    }
    
    public void Pop() {
        stack.Pop();
    }
    
    public int Top() {
        return stack.Peek();
    }
    
    public int GetMin() {
        var temp = new Stack<int>();

        int mini = stack.Peek();

        while(stack.Count > 0){
            mini = Math.Min(mini, stack.Peek());
            temp.Push(stack.Pop());
        }

        while(temp.Count > 0){
            stack.Push(temp.Pop());
        }
        return mini;
    }
}
