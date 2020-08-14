import { SELECTED_MENU, FOOD_CART } from "./ActionTypes";

export const selectedMenu = (value) => {
  return {
    type: SELECTED_MENU,
    payload: value,
  };
};

export const foodCart = (item) => {
  return {
    type: FOOD_CART,
    payload: item,
  };
};
