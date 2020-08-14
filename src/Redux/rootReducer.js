import { ServicesReducer } from "./Services/Reducer";
import { combineReducers } from "redux";
import { UiReducer } from "./UIModals/Reducer";
import { restaurantReducer } from "./Restaurant/Reducer";
import { authReducer } from "./Authentication/Reducer";

export let Reducer = combineReducers({
  service: ServicesReducer,
  ui: UiReducer,
  restaurant: restaurantReducer,
  auth: authReducer,
});
