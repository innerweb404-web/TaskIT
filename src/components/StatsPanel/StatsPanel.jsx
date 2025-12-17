import useTodo from "../../stores/todoStore";
import './statsPanel.css'

const StatsPanel = () => {
    const todoIds = useTodo(state => state.todoIds);
    const todosById = useTodo(state => state.todosById);

    const completed = todoIds.filter(
        id => todosById[id].completed
    ).length;

    return (
        <div className="stats">
            <p>Total: {todoIds.length}</p>
            <p>Completed: {completed}</p>
        </div>
    );
};

export default StatsPanel;
