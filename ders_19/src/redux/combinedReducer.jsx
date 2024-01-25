 import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
 import {todoReducer} from "./todoReducer";
 import { createStore } from "redux";

 const rootReducer = combineReducers({
    count: counterReducer,
    todo: todoReducer
 });

 export const store = createStore(rootReducer);