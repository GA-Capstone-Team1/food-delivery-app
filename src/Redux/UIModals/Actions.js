import { FILTER_BAR, OVERVIEW, MENUS, LOADER } from "./ActionTypes";

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
