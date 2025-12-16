import useTodo from "../stores/todoStore";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todoIds = useTodo(state => state.todoIds);

    return (
        <ul>
            {todoIds.map(id => (
                <TodoItem key={id} id={id} />
            ))}
        </ul>
    );
};

export default TodoList;
