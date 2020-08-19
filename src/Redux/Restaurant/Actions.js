import {
  SELECTED_MENU,
  FOOD_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "./ActionTypes";

export const selectedMenu = (value) => {
  return {
    type: SELECTED_MENU,
    payload: value,
  };
};

export const foodCart = (recipe_id, title, basePrice, items, totalPrice) => {
  return {
    type: FOOD_CART,
    payload: { recipe_id, title, basePrice, items, totalPrice },
  };
};

export const incrementItem = (value) => {
  return {
    type: INCREMENT_ITEM,
    payload: value,
  };
};

export const decrementItem = (value) => {
  return {
    type: DECREMENT_ITEM,
    payload: value,
  };
};
