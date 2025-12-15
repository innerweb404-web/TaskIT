import React, { useState } from "react";
import useTodo from "../stores/todoStore";
import './todoList.css'

const TodoList = () => {
    const todos = useTodo((state) => state.todos);
    const removeTodo = useTodo((state) => state.removeTodo);
    const editTodo = useTodo((state) => state.editTodo);

    const [editingId, setEditingId] = useState(null);
    const [editedTask, setEditedTask] = useState("");

    const startEdit = (task) => {
        setEditingId(task.id);
        setEditedTask(task.text);
    };

    const saveEdit = () => {
        editTodo(editingId, editedTask);
        setEditingId(null);
        setEditedTask("");
    };

    function handleEnterKey(e){
        if (e.key === "Enter" && editedTask.trim()) {
            editTodo(editingId, editedTask);
            setEditingId(null);
            setEditedTask("");
        }
    }

    return (
        <ul>
        {todos.map((task) => (
            <li className='task-lists' key={task.id}>
            {editingId === task.id ? (
                <div className="editing-task-wrapper">

                    <input
                        className="input-task"
                        type="text"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                        onKeyDown={handleEnterKey}
                    />
                    <div className="f-btns">
                        <button onClick={saveEdit} className="btn">Save</button>
                        <button onClick={() => setEditingId(null)} className="btn">Cancel</button>
                    </div>
                </div>
            ) : (
                <div className="task-text">
                    <span>{task.text}</span>
                    <div className="f-btns">
                        <button onClick={() => startEdit(task)} className="btn">Edit</button>
                        <button onClick={() => removeTodo(task.id)} className="btn">Delete</button>
                    </div>
                </div>
            )} 
            </li>
        ))}
        </ul>
    );
};

export default TodoList;
