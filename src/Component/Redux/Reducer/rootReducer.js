import { applyMiddleware, combineReducers } from "redux";
import { countReducer } from "./countReducer";
import crudReducer from "./crudReducer";
import { apiReducer } from "./apiReducer";


export const rootReducer = combineReducers({
    count : countReducer,
    ary : crudReducer,
    student : apiReducer
})