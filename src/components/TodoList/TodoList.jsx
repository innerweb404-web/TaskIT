import React, { memo } from "react";
import useTodo from "../../stores/todoStore";
import TodoItem from "../TodoItem/TodoItem";
import "./todoList.css";

const TodoList = memo(() => {
    const todoIds = useTodo(state => state.todoIds);

    if (!todoIds.length) return <p className="no-tasks">No tasks yet...</p>;

    return (
        <ul className="todo-list">
        {todoIds.map((id) => (
            <TodoItem key={id} id={id} />
        ))}
        </ul>
    );
});

export default TodoList;
