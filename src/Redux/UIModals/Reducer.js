import { FILTER_BAR, OVERVIEW, MENUS, FOOD_MENUS, LOADER } from "./ActionTypes";

const initialState = {
  filterBar: false,
  overview: false,
  menus: true,
  foodMenus: false,
  loader: false,
};
export const UiReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FILTER_BAR:
      return {
        ...state,
        filterBar: !state.filterBar,
      };

    case OVERVIEW:
      return {
        ...state,
        overview: true,
        menus: false,
      };
    case MENUS:
      return {
        ...state,
        menus: true,
        overview: false,
      };

    case FOOD_MENUS:
      return {
        ...state,
        foodMenus: !state.foodMenus,
      };

    case LOADER:
      return {
        ...state,
        loader: action.payload,
      };

    default:
      return state;
  }
};
