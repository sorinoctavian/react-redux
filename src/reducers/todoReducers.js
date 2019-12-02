import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS } from '../actions/actionTypes';

const initialState = {
    allIds: [],
    byIds: {}
}

export default (state = initialState, action) => {
    if (action.type === ADD_TODO) {
        const { content, id } = action.payload;
        return {
            ...state,
            allIds: [...state.allIds, id],
            byIds: {
                ...state.byIds,
                [id]: {
                    id,
                    content,
                    done: false
                }
            }
        }
    }
    if (action.type === TOGGLE_TODO) {
        const { id } = action.payload;
        return {
            ...state,
            byIds: {
                ...state.byIds,
                [id]: {
                    ...state.byIds[id],
                    done: !state.byIds[id].done
                }
            }
        }
    }

    if (action.type === FETCH_TODOS) {
        let allIds = [];
        let byIds = {};
        for (let i = 0; i < action.payload.length; i++) {
            const item = action.payload[i];
            const { id } = item;
            allIds.push(item.id);
            byIds = {
                ...byIds,
                [id]: {
                    ...item
                }
            }
        }
        return {
            allIds,
            byIds
        }
    }

    return state;
}

// https://github.com/zalmoxisus/redux-devtools-extension#installation