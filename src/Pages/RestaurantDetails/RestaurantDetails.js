import React from "react";
import styles from "./RestaurantDetails.module.scss";
import Cart from "../../Components/Cart/Cart";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchDish from "../../Components/SearchDish/SearchDish";
import Navbar from "../../Layout/Navbar/Navbar";
import FoodItems from "../../Components/FoodItems/FoodItems";
import TabBarOverviewMenu from "../../Components/TabBarOverviewMenus/TabBarOverviewMenu";
import RestaurantDish from "../../Components/RestaurantDish/RestaurantDish";
import { connect } from "react-redux";
import VerticalTabs from "../../Components/VerticalTab/VerticalTab";


function RestaurantDetails({ menus }) {
  return (
    <>
      <Navbar></Navbar>

      <div className={styles.container}>
        <RestaurantDish />
        <div className={styles.searchDish}>
          <SearchDish></SearchDish>
        </div>
        <div className={styles.bottom}>
          <div>
          {menus === true ? <VerticalTabs></VerticalTabs> : null }
          </div>
          <div className={styles.FoodItems}>
            <TabBarOverviewMenu></TabBarOverviewMenu>
            {menus === true ? <FoodItems></FoodItems> : null}
          </div>
          <div className={styles.cart}>
            <Cart></Cart>
          </div>
        </div>
      </div>
    </>
  );
}

const matchStateToProps = (state) => {
  return {
    menus: state.ui.menus,
  };
};

export default connect(matchStateToProps)(RestaurantDetails);
