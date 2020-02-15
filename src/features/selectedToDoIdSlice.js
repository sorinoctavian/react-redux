import { createSlice } from '@reduxjs/toolkit'

const selectedToDoIdSlice = createSlice({
    name: "selectedToDoId",
    initialState: -1,
    reducers: {
        select(state, action) {
            return action.payload;
        }
    }
})

export const { select } = selectedToDoIdSlice.actions;

export default selectedToDoIdSlice.reducer;