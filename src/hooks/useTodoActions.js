import useTodo from "../stores/todoStore";

const useTodoActions = () => {
    const addTodo = useTodo(state => state.addTodo);
    const removeTodo = useTodo(state => state.removeTodo);
    const toggleTodo = useTodo(state => state.toggleTodo);
    const editTodo = useTodo(state => state.editTodo);

    return { addTodo, removeTodo, toggleTodo, editTodo };
};

export default useTodoActions;
