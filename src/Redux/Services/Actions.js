import {
  GET_CITYID,
  GET_USER_LOCATION,
  GET_LOCATION_RESTAURANTS,
  RESTAURANT_SEARCH,
} from "./ActionTypes";
import { api } from "../../Services/api";
import axios from "axios";

export const filterRestaurants = (restaurant) => {
  console.log(restaurant);
  return {
    type: RESTAURANT_SEARCH,
    payload: restaurant,
  };
};

export const getCityId = (city) => {
  return (dispatch) => {
    console.log("called");
    axios
      .get(`${api}cities?q=${city}`, {
        headers: {
          Accept: "application/json",
          "user-key": "dae550f2de39692413804f96c793bc96",
        },
      })
      .then((data) => {
        console.log({ data });
        dispatch({
          type: GET_CITYID,
          payload: data.data.location_suggestions,
        });
      });
  };
};

export const getUserLocation = (lat, lon) => {
  return (dispatch) => {
    console.log("called");
    axios
      .get(
        `${api}geocode?lat=${lat}&lon=${lon}
      `,
        {
          headers: {
            Accept: "application/json",
            "user-key": "dae550f2de39692413804f96c793bc96",
          },
        }
      )
      .then((data) => {
        console.log({ data });
        dispatch({
          type: GET_USER_LOCATION,
          payload: data.data.location,
        });
      });
  };
};

//developers.zomato.com/api/v2.1/search?entity_id=11431&entity_type=city&q=sangli&lat=16.85&lon=74.58

export const getLocationRestaurants = (
  entityId,
  entityType,
  query,
  sort,
  order
) => {
  return (dispatch) => {
    console.log("called");
    if (sort || order) {
      if (query) {
        axios
          .get(
            `${api}search?entity_id=${entityId}&entity_type=${entityType}&q=${query}&sort=${sort}&order=${order}

      `,
            {
              headers: {
                Accept: "application/json",
                "user-key": "dae550f2de39692413804f96c793bc96",
              },
            }
          )
          .then((data) => {
            console.log(`${api}search?entity_id=${entityId}&entity_type=${entityType}&sort=${sort}&order=${order}

          `);
            console.log(`${api}search?entity_id=${entityId}&entity_type=${entityType}&q=${query}&sort=${sort}&order=${order}

          `);
            console.log({ data });
            dispatch({
              type: GET_LOCATION_RESTAURANTS,
              payload: data.data,
            });
          });
      } else {
        axios
          .get(
            `${api}search?entity_id=${entityId}&entity_type=${entityType}&sort=${sort}&order=${order}

      `,
            {
              headers: {
                Accept: "application/json",
                "user-key": "dae550f2de39692413804f96c793bc96",
              },
            }
          )
          .then((data) => {
            console.log(`${api}search?entity_id=${entityId}&entity_type=${entityType}&sort=${sort}&order=${order}

          `);
            console.log(`${api}search?entity_id=${entityId}&entity_type=${entityType}&sort=${sort}&order=${order}

          `);
            console.log({ data });
            dispatch({
              type: GET_LOCATION_RESTAURANTS,
              payload: data.data,
            });
          });
      }
    }
    axios
      .get(
        `${api}search?entity_id=${entityId}&entity_type=${entityType}&q=${query}

      `,
        {
          headers: {
            Accept: "application/json",
            "user-key": "dae550f2de39692413804f96c793bc96",
          },
        }
      )
      .then((data) => {
        console.log({ data });
        dispatch({
          type: GET_LOCATION_RESTAURANTS,
          payload: data.data,
        });
      });
  };
};
