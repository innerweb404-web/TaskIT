import React, { useState } from 'react';
import useTodo from '../stores/todoStore';
import './addTodo.css'

const AddTodo = () => {
    const addTodo = useTodo(state => state.addTodo); 
    const [task, setTask] = useState('');

    
    const handleEnterKey = (e) => {
        if (e.key === "Enter" && task.trim()) {
            addTodo(task);
            setTask("");
        }
    };

    return (
        <div className="input-task-wrapper">
                <input
                    className='input-task'
                    type="text"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    placeholder="Enter a task..."
                    onKeyDown={handleEnterKey}
                />

            <button
                className='btn'
                onClick={() => {
                addTodo(task);
                setTask('');
                }}
                disabled={!task.trim()}
            >
                Add Task
            </button>
        </div>
    );
}

export default AddTodo;
