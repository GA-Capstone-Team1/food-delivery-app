import {
  GET_CITYID,
  GET_USER_LOCATION,
  GET_LOCATION_RESTAURANTS,
} from "./ActionTypes";

const initialState = {
  city: "",
  cityId: Number,
  userLocation: String,
  entity_type: "",
  entity_id: Number,
  locationRestaurants: "",
};
export const ServicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITYID:
      return {
        ...state,
        cityId: action.payload,
      };

    case GET_USER_LOCATION:
      return {
        ...state,
        userLocation: action.payload.city_name,
        entity_type: action.payload.entity_type,
        entity_id: action.payload.entity_id,
      };

    case GET_LOCATION_RESTAURANTS:
      return {
        ...state,
        locationRestaurants: action.payload,
      };

    default:
      return state;
  }
};
