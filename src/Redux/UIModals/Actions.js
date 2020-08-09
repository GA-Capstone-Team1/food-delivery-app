import { FILTER_BAR } from "./ActionTypes";

export const filterBar = (value) => {
  return {
    type: FILTER_BAR,
    payload: value,
  };
};
