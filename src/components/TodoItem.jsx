import React, { useState } from "react";
import useTodo from "../stores/todoStore";
import './todoList.css'

const TodoItem = React.memo(function TodoItem({ id }) {
    const todo = useTodo(state => state.todosById[id]);
    const removeTodo = useTodo(state => state.removeTodo);
    const editTodo = useTodo(state => state.editTodo);

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState("");

    if (!todo) return null;

    const startEdit = () => {
        setIsEditing(true);
        setEditedText(todo.text);
    };

    const saveEdit = () => {
        if (!editedText.trim()) return;
        editTodo(id, editedText);
        setIsEditing(false);
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") saveEdit();
    };

    return (
        <li className="task-lists">
            {isEditing ? (
                <div className="editing-task-wrapper">
                    <input
                        className="input-task"
                        value={editedText}
                        onChange={e => setEditedText(e.target.value)}
                        onKeyDown={handleEnter}
                    />
                <div className="f-btns">
                    <button className="btn" onClick={saveEdit}>Save</button>
                    <button className="btn" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
                </div>
            ) : (
                <div className="task-text">
                    <span>{todo.text}</span>
                    <div className="f-btns">
                        <button className="btn" onClick={startEdit}>Edit</button>
                        <button className="btn" onClick={() => removeTodo(id)}>Delete</button>
                    </div>
                </div>
            )}
        </li>
    );
});

export default TodoItem;