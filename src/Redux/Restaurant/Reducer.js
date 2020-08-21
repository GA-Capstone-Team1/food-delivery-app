import {
  SELECTED_MENU,
  FOOD_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "./ActionTypes";

const initialState = {
  menu: "pizza",
  cart: [],
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

    case INCREMENT_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.recipe_id === action.payload) {
            item.items++;
            item.totalPrice = item.totalPrice + item.basePrice;
          }

          return item;
        }),
      };

    case DECREMENT_ITEM:
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};
