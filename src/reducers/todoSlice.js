import * as actionTypes from "../actions/actionTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialToDos = [];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialToDos,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      state = state.filter(item => {
        return item.id !== action.payload.id;
      });
    },
    update: (state, action) => {
      const item = state.find(p => p.id === action.payload.id);
      if (item !== undefined) {
        item = action.payload;
      }
    },
    toggle: (state, action) => {
      const item = state.find(p => p.id === action.payload.id);
      if (item !== undefined) {
        item.checked = !item.checked;
      }
    },
    get: (state, action) => {
      return [...action.payload];
    }
  }
});

export const { add, remove, update, toggle, get } = todoSlice.actions;
export default todoSlice.reducer;
