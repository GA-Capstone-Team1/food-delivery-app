import React, { useEffect } from "react";
import styles from "./Restaurants.module.scss";
import FiltersSideBar from "../../Components/FiltersSideBar/FIltersSideBar";
import Card from "../../Components/RestaurantCard/RestaurantCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";
import { Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import NavBar from "../../Layout/Navbar/Navbar";
import { filterBar } from "../../Redux/UIModals/Actions";

function Restaurants({ setFilterBar, filterBar, location }) {
  const searchLocation = () => {
    if (navigator.geolocation) {
      console.log("called Searchlocation");
      navigator.geolocation.getCurrentPosition(success);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  if (filterBar === true) {
    var display = "block";
  } else {
    display = "none";
  }

  let handleFilterBar = () => {
    setFilterBar();
  };

  function success(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log("called : " + lat, lon);
    // fetchApi(lat, lon);
  }

  useEffect(() => {
    searchLocation();
  });
  return (
    <>
      <div
        className={styles.backdrop}
        onClick={() => handleFilterBar()}
        style={{ display: display }}
      ></div>
      <NavBar></NavBar>

      <div container className={styles.container}>
        <FiltersSideBar></FiltersSideBar>

        <div className={styles.searchbar}>
          <SearchBar />
        </div>
        <div className={styles.upperBar}>
          <div className={styles.loc}>
            <Typography variant="h6" className={styles.locText}>
              Search Results for {location}
            </Typography>
          </div>
          <div className={styles.filter} onClick={() => handleFilterBar()}>
            <TuneIcon />
            <Button>Filters</Button>
          </div>
        </div>

        <div className={styles.cardDiv}>
          <Card />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    filterBar: state.ui.filterBar,
    location: state.service.userLocation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterBar: (value) => dispatch(filterBar(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
