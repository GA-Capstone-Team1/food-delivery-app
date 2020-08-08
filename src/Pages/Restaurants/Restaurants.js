import React, { useEffect } from "react";
import styles from "./Restaurants.module.scss";
import FiltersSideBar from "../../Components/FiltersSideBar/FIltersSideBar";
import Card from "../../Components/RestaurantCard/RestaurantCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { Grid } from "@material-ui/core";

function Restaurants() {
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
    console.log("called : " + lat, lon);
    // fetchApi(lat, lon);
  }

  useEffect(() => {
    searchLocation();
  });
  return (
    <div container className={styles.container}>
      <div className={styles.searchbar}>
        <SearchBar />
      </div>
      <div className={styles.FiltersSideBar}>
        <FiltersSideBar></FiltersSideBar>
      </div>
      <div className={styles.cards}>
        <Card></Card>
      </div>
    </div>
  );
}

export default Restaurants;
