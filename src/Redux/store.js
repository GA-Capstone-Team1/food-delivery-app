import { Reducer } from "./rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const store = createStore(Reducer, applyMiddleware(thunk, logger));
