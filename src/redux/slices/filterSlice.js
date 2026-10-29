import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: "all" // all || active || completed
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
});

export const {addTodo, deleteTodo, toggleTodo} = todosSlice.actions;

export default todosSlice.reducer