import React from "react";
import styles from "./RestaurantDetailsBottom.module.scss";
import TabBarOverviewMenu from "../TabBarOverviewMenus/TabBarOverviewMenu";
import VerticalTab from "../VerticalTab/VerticalTab";
import FoodItems from "../FoodItems/FoodItems";
import { Typography } from "@material-ui/core";
import Cart from "../RestaurantCart/Cart";

let RestaurantDetailsBottom = () => {
  return (
    <div>
      <div className={styles.FoodItemsContainer}>
        <div className={styles.tab}>
          <TabBarOverviewMenu></TabBarOverviewMenu>
        </div>
        <div className={styles.verticalTab}>
          <VerticalTab></VerticalTab>
        </div>
        <div className={styles.items}>
          <FoodItems></FoodItems>
        </div>
      </div>
      <div className={styles.cart}>
        <Typography variant="h6">Cart</Typography>

        <Cart></Cart>
      </div>
    </div>
  );
};

export default RestaurantDetailsBottom;
