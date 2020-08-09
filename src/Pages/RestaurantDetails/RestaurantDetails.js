import React from "react";
import styles from "./RestaurantDetails.module.scss";
import Cart from "../../Components/Cart/Cart";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchDish from "../../Components/SearchDish/SearchDish";
import Navbar from "../../Layout/Navbar/Navbar";
import FoodItems from "../../Components/FoodItems/FoodItems";
import TabBarOverviewMenu from "../../Components/TabBarOverviewMenus/TabBarOverviewMenu";

function RestaurantDetails() {
  return (
    <>
      <Navbar></Navbar>

      <div className={styles.container}>
        <SearchDish></SearchDish>
        <div className={styles.tabBar}>
          <TabBarOverviewMenu></TabBarOverviewMenu>
        </div>
        <div className={styles.bottom}>
          <div className={styles.FoodItems}>
            <FoodItems></FoodItems>
          </div>
          <div className={styles.cart}>
            <Cart></Cart>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantDetails;
