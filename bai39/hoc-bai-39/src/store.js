import {combineReducers, createStore} from "redux";
import { counterReducer } from "./reducers/counter";
import { todoReducer } from "./reducers/todo";
const rootReducer=combineReducers({
    counterReducer,
    todoReducer
})
export const store=createStore(rootReducer);