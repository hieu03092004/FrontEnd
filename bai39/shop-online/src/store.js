import {combineReducers, createStore} from "redux";
import { cartReducer } from "./reducers/Cart";
const rootReducer=combineReducers({
    cartReducer,
})
export const store=createStore(rootReducer);