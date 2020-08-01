import React from "react";
import styles from "./Restaurants.module.scss";
import FiltersSideBar from "../../Components/FiltersSideBar/FIltersSideBar";
import Card from "../../Components/RestaurantCard/RestaurantCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { Grid } from "@material-ui/core";

function Restaurants() {
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
