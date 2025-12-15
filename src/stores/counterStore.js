import { create } from "zustand";


// create() defines a store
// set() updates state immutably
// Functions inside the store are actions
// count is the global state
const useStore = create((set) => ({
    count: 0,
    increment: ()=> set(state => ({count:state.count + 1})),
    decrement: ()=> set(state => ({count:state.count - 1})),
    reset: ()=> set({count: 0 }),
}))


export default useStore;