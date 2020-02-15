import { createSlice } from '@reduxjs/toolkit'
import { getToDos, postToDo, deleteToDo, patchToDo } from '../apis/api'

const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => { return item.id !== action.payload.id });
        },
        update(state, action) {
            return state.map((todo) => {
                if (todo.id !== action.payload.id) {
                    return todo
                }

                return { ...action.payload }
            })
        },
        toggle(state, action) {
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo
                }
                return { ...todo, checked: !todo.checked }
            })
        },
        get(state, action) {
            state.push(...action.payload.data);
        }
    }
})

export const { add, remove, update, toggle, get } = todosSlice.actions;

export const getInitialState = () => async dispatch => {
    let asyncronGet = await getToDos();
    dispatch(
        get(asyncronGet)
    )
}

export const addToDo = (text) => async dispatch => {
    let newToDo = {
        content: text,
        checked: false
    };
    let response = await postToDo(newToDo);
    dispatch(add(response.data));
}

export const removeToDo = (id) => async dispatch => {
    await deleteToDo(id);
    dispatch(remove({ id: id }));
}

export const updateToDo = (toDo) => async dispatch => {
    let response = await patchToDo(toDo);
    dispatch(update({ ...toDo, ...response.data }));
}

export default todosSlice.reducer;