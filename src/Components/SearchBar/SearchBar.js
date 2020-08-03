import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import TuneIcon from "@material-ui/icons/Tune";
import styles from "./SearchBar.module.scss";
import { Button, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import {
  getCityId,
  getUserLocation,
  getLocationRestaurants,
} from "../../Redux/Services/Actions";
import { useHistory } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // padding: "2px 4px",
//     // // marginTop:'20px',
//     // display: "flex",
//     // alignItems: "center",
//     // width: 100%,
//     // justifyContent: "center",
//   },
//   root1: {
//     // padding: "2px 4px",
//     // // marginTop:'20px',
//     // display: "flex",
//     // alignItems: "center",
//     // width: 345,
//     // justifyContent: "center",
//   },
//   input: {
//     // marginLeft: theme.spacing(2),
//     // flex: 1,
//   },
//   iconButton: {
//     // padding: 10,
//   },
//   divider: {
//     // height: 28,
//     // margin: 4,
//   },
// }));

function SearchBar({
  cityId,
  SelectedCity,
  getUserLocation,
  userLocation,
  getLocationRestaurants,
  entityType,
  entityId,
}) {
  let history = useHistory();

  const [data, setData] = useState();
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
    getLocationRestaurants(entityId, entityType, userLocation);
    history.push("/restaurants");
  };

  let timeout;
  const handleChangeCity = (e) => {
    let city = e.target.value;
    console.log(city);
    console.log(timeout);
    if (timeout) {
      console.log(timeout);
      clearTimeout(timeout);
    }

    console.log(timeout);
    timeout = setTimeout(() => {
      SelectedCity(city);
    }, 500);
  };

  const opensearch = () => {
    console.log("clicked");
  };

  const toggleFilter = () => {};

  return (
    <div className={styles.searchbar}>
      <Paper component="form" className={styles.root}>
        <InputBase
          onClick={() => opensearch()}
          className={styles.input}
          value={userLocation}
          placeholder="Enter location "
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
        />
        <IconButton className={styles.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {history.location.pathname === "/" ? (
        <Button
          className={styles.btn}
          style={{ display: "block" }}
          variant="contained"
          color="primary"
          onClick={() => handleRestaurantSearches()}
        >
          Search
        </Button>
      ) : (
        <Button className={styles.btn} variant="contained" color="primary">
          Search
        </Button>
      )}
      <Paper className={styles.filterContainer} onClick={() => toggleFilter()}>
        <Typography>Filter</Typography>
        <IconButton className={styles.tuneButton} aria-label="mylocation">
          <TuneIcon className={styles.tuneIcon} />
        </IconButton>
      </Paper>
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
    getLocationRestaurants: (entityId, entityType, userLocation) =>
      dispatch(getLocationRestaurants(entityId, entityType, userLocation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
