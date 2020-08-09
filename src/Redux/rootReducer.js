import { ServicesReducer } from "./Services/Reducer";
import { combineReducers } from "redux";
import { UiReducer } from "./UIModals/Reducer";

export let Reducer = combineReducers({
  service: ServicesReducer,
  ui: UiReducer,
});
