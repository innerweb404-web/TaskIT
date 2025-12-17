import React, { useState } from "react";
import "./addTodo.css";
import useTodoActions from "../../hooks/useTodoActions";

const AddTodo = () => {
    const { addTodo } = useTodoActions();
    const [task, setTask] = useState("");

    const handleAdd = () => {
        if (!task.trim()) return;
        addTodo(task);
        setTask("");
    };

    const handleEnterKey = (e) => {
        if (e.key === "Enter") handleAdd();
    };

    return (
        <div className="input-task-wrapper">
        <input
            className="input-task"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            onKeyDown={handleEnterKey}
        />
        <button className="btn addBtn" onClick={handleAdd} disabled={!task.trim()}>
            Add Task
        </button>
        </div>
    );
};

export default AddTodo;
