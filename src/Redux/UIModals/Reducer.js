import { FILTER_BAR } from "./ActionTypes";

const initialState = {
  filterBar: false,
};
export const UiReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FILTER_BAR:
      return {
        ...state,
        filterBar: !state.filterBar,
      };

    default:
      return state;
  }
};
