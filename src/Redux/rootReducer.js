import { ServicesReducer } from "./Services/Reducer";
import { combineReducers } from "redux";

export let Reducer = combineReducers({ service: ServicesReducer });
