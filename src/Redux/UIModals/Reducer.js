import { FILTER_BAR, OVERVIEW, MENUS } from "./ActionTypes";

const initialState = {
  filterBar: false,
  overview: false,
  menus: true,
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

    default:
      return state;
  }
};
