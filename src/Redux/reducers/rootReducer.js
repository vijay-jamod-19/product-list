import { combineReducers } from "redux";
import { ProductReducer } from "./productReducer";

export const rootreducer = combineReducers({
    Product : ProductReducer,
})