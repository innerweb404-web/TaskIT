import React, { memo, useEffect, useRef, useState } from "react";
import useTodo from "../../stores/todoStore";
import useTodoActions from "../../hooks/useTodoActions";
import Toggle from "../Toggle/Toggle";
import "./todoItem.css";

const TodoItem = memo(function TodoItem({ id }) {
    const todo = useTodo(state => state.todosById[id]);
    const { removeTodo, editTodo, toggleTodo } = useTodoActions();

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState("");
    const inputRef = useRef(null)

    useEffect(() =>{
        if(isEditing && inputRef.current){
            inputRef.current.focus();
        }
    },[isEditing])

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

    

    const isDisabled = todo.completed; 

    

    return (
        <li className="task-lists">
            {isEditing ? (
                <div className="editing-task-wrapper wrap">
                    <input
                        className="input-task"
                        value={editedText}
                        ref={inputRef}
                        onChange={(e) => setEditedText(e.target.value)}
                        onKeyDown={handleEnter}
                    />
                    <div className="f-btns">
                        <button onClick={saveEdit} disabled={isDisabled}>Save</button>
                        <button onClick={() => setIsEditing(false)} disabled={isDisabled}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div className="task-text-wrapper wrap">
                    <span className={todo.completed ? "completed-task" : ""}>{todo.text}</span>
                    <div className="f-btns">
                        <button onClick={startEdit} disabled={isDisabled}>Edit</button>
                        <button onClick={() => removeTodo(id)}>Delete</button>
                    </div>
                </div>
            )}
            <Toggle checked={todo.completed} onChange={() => toggleTodo(id)} />
        </li>
    );
});

export default TodoItem;
