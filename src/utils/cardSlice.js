import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const idToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== idToRemove);
        },
        clearCard: (state) => {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, clearCard } = cardSlice.actions;
export default cardSlice.reducer;
