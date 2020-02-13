import { combineReducers } from "redux";
import todos from "./reducers/toDoReducer";

import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers(todos);

export default configureStore({
  reducer
});
