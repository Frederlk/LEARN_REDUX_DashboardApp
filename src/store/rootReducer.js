import { combineReducers } from "redux";
import { filtersReducer } from "./filters/filtersReducer";
import { positionsReducer } from "./positions/positionsReducer";

export const rootReducer = combineReducers({ positions: positionsReducer, filters: filtersReducer });
