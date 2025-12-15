import { create } from "zustand";


const useTodo = create((set) => ({
    todos: [],
    addTodo: (text) => set(state => ({
        todos: [...state.todos, { id: Date.now(), text, completed: false}]
    })),
    removeTodo:(id) => set(state => ({
        todos: state.todos.filter(todo => 
            todo.id !== id
        )
    })),
    toggleTodo: (id) => set(state => ({
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    })),
    editTodo: (id, newText) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
            todo.id === id ? {
                ...todo, text:newText
            } : todo),
        })),
}));

export default useTodo;