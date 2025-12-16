import { create } from "zustand";

const useTodo = create((set) => ({
    todoIds: [],
    todosById: {},

    addTodo: (text) =>
        set((state) => {
        const id = Date.now();
        return {
            todoIds: [...state.todoIds, id],
            todosById: {
            ...state.todosById,
            [id]: { id, text, completed: false }
            }
        };
        }),

    removeTodo: (id) =>
        set((state) => {
        const { [id]: _, ...rest } = state.todosById;
        return {
            todoIds: state.todoIds.filter(tid => tid !== id),
            todosById: rest
        };
        }),

    toggleTodo: (id) =>
        set((state) => ({
        todosById: {
            ...state.todosById,
            [id]: {
            ...state.todosById[id],
            completed: !state.todosById[id].completed
            }
        }
        })),

    editTodo: (id, text) =>
        set((state) => ({
        todosById: {
            ...state.todosById,
            [id]: {
            ...state.todosById[id],
            text
            }
        }
    }))
}));

export default useTodo;
