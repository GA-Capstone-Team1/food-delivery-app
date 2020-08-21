import { FILTER_BAR, OVERVIEW, MENUS, LOADER, FOOD_MENUS } from "./ActionTypes";

export const filterBar = (value) => {
  return {
    type: FILTER_BAR,
    payload: value,
  };
};

export const overview = (value) => {
  return {
    type: OVERVIEW,
    payload: value,
  };
};

export const foodMenus = () => {
  return {
    type: FOOD_MENUS,
  };
};

export const menus = (value) => {
  return {
    type: MENUS,
    payload: value,
  };
};

export const setloader = (value) => {
  return {
    type: LOADER,
    payload: value,
  };
};
