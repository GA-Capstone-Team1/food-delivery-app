import { SELECTED_MENU, FOOD_CART } from "./ActionTypes";

const initialState = {
  menu: "pizza",
  cart: "",
  itemAdded: null,
};
export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_MENU:
      return {
        ...state,
        menu: action.payload,
      };

    case FOOD_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};
