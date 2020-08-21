import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import styles from "./SearchBar.module.scss";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import {
  getCityId,
  getUserLocation,
  getLocationRestaurants,
  filterRestaurants,
} from "../../Redux/Services/Actions";
import { useHistory } from "react-router-dom";

function SearchBar({
  cityId,
  SelectedCity,
  getUserLocation,
  userLocation,
  getLocationRestaurants,
  entityType,
  entityId,
  filterRestaurants,
}) {
  let history = useHistory();
  let [res, setRes] = useState("");

  const searchLocation = () => {
    if (navigator.geolocation) {
      console.log("called Searchlocation");
      navigator.geolocation.getCurrentPosition(success);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  function success(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    getUserLocation(lat, lon);
  }

  console.log(cityId);

  const handleDetectLocation = () => {
    searchLocation();
  };

  const handleRestaurantSearches = () => {
    getLocationRestaurants(entityId, entityType, res);
    history.push("/restaurants");
  };

  const handleRestaurantName = (e) => {
    setRes(e.target.value);
  };

  let timeout;

  const handleChangeCity = (e) => {
    let city = e.target.value;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      SelectedCity(city);
    }, 1000);
  };

  console.log(history.location.pathname);
  return (
    <div
      className={styles.searchbar}
      style={
        history.location.pathname === "/"
          ? { flexDirection: "column" }
          : { flexDirection: "row" }
      }
    >
      <Paper component="form" className={styles.root}>
        <InputBase
          className={styles.input}
          placeholder="Enter location"
          value={userLocation}
          onChange={(e) => handleChangeCity(e)}
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          onClick={() => handleDetectLocation()}
          className={styles.iconButton}
          aria-label="mylocation"
        >
          <MyLocationIcon />
        </IconButton>
      </Paper>
      <Paper component="form" className={styles.root}>
        <InputBase
          className={styles.input}
          placeholder="Search for restaurant, cuisine or dish..."
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => handleRestaurantName(e)}
        />
        <IconButton className={styles.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Button
        className={styles.btn}
        style={{ display: "block" }}
        variant="contained"
        color="primary"
        onClick={() => handleRestaurantSearches()}
      >
        Search
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cityId: state.service.cityId,
    userLocation: state.service.userLocation,
    entityType: state.service.entity_type,
    entityId: state.service.entity_id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    SelectedCity: (query) => dispatch(getCityId(query)),
    getUserLocation: (lat, lon) => dispatch(getUserLocation(lat, lon)),
    filterRestaurants: (res) => dispatch(filterRestaurants(res)),
    getLocationRestaurants: (entityId, entityType, userLocation) =>
      dispatch(getLocationRestaurants(entityId, entityType, userLocation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
