import React, { useEffect } from "react";
import styles from "./Restaurants.module.scss";
import FiltersSideBar from "../../Components/FiltersSideBar/FIltersSideBar";
import Card from "../../Components/RestaurantCard/RestaurantCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from '@material-ui/icons/Tune';
import { Grid , Typography,Button} from "@material-ui/core";

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
      {/* <div className={styles.FiltersSideBar}>
        <FiltersSideBar></FiltersSideBar>
      </div>
      <div className={styles.cards}>
        <Card></Card>
      </div> */}
      <div className={styles.upperBar}>
        <div className={styles.loc}>
          <Typography className={styles.locText}>Restaurant in Location</Typography>
        </div>
        <div className={styles.search}>
          <SearchIcon/>
          <Button className={styles.btn}>Search</Button>
        </div>
        <div className={styles.filter}>
          <TuneIcon/>
          <Button>Filters</Button>
        </div>
      </div>
      <div className={styles.cardDiv}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default Restaurants;
