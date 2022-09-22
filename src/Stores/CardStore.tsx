import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { DoneReducer } from "../Reducers/DoneReducer";
import { DoingReducer } from "../Reducers/DoingReducer";
import { TodoReducer } from "../Reducers/TodoReducer";

const rootReducer = combineReducers({
    todo: TodoReducer,
    doing: DoingReducer,
    done: DoneReducer
})
export const CardStore = configureStore({ reducer: rootReducer });