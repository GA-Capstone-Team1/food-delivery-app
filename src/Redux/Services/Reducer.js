import {
  GET_CITYID,
  GET_USER_LOCATION,
  GET_LOCATION_RESTAURANTS,
  RESTAURANT_SEARCH,
  SEARCH_MENUS,
} from "./ActionTypes";

const initialState = {
  city: "",
  cityId: Number,
  userLocation: "",
  entity_type: "",
  entity_id: Number,
  locationRestaurants: "",
  restaurantQuery: "",
  foodMenus: null,
};

export const ServicesReducer = (state = initialState, action) => {
  console.log(action);
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

    case RESTAURANT_SEARCH:
      return {
        ...state,
        restaurantQuery: action.payload,
      };

    case SEARCH_MENUS:
      return {
        ...state,
        foodMenus: action.payload,
      };

    default:
      return state;
  }
};
