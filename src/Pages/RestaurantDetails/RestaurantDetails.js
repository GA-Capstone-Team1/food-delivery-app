import React, { useRef, useState, useEffect } from "react";
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
import VisibilitySensor from "react-visibility-sensor";
import { CardMedia, Typography } from "@material-ui/core";
import item from "../../images/sandwich.png";
import RestaurantDetailsBottom from "../../Components/RestaurantDetailsBottom/RestaurantDetailsBottom";
import { useHistory, useParams } from "react-router-dom";
import { restaurantDetails } from "../../Redux/Services/Actions";

let RestaurantDetails = ({ menus, restaurantDetails, cart, restarantId }) => {
  const [visible, setVisible] = useState(false);
  let topref = useRef();

  const params = useParams();
  console.log(params);

  useEffect(() => {
    restarantId(params.resId);
  }, []);

  console.log(visible);

  const handleVisibility = (e) => {
    setVisible(e);
  };

  return (
    <>
      <Navbar></Navbar>
      {restaurantDetails ? (
        <div className={styles.container}>
          <div className={styles.resdetails}>
            <RestaurantDish></RestaurantDish>
          </div>

          <div className={styles.searchDish}>
            <SearchDish></SearchDish>
          </div>
          <div className={styles.bottom}>
            <div className={styles.FoodItemsContainer}>
              <div className={styles.tab}>
                <TabBarOverviewMenu></TabBarOverviewMenu>
              </div>
              <div className={styles.verticalTab}>
                <VerticalTabs></VerticalTabs>
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
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </>
  );
};

const matchStateToProps = (state) => {
  return {
    menus: state.ui.menus,
    restaurantDetails: state.service.restaurantDetails,
    cart: state.restaurant.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    restarantId: (id) => dispatch(restaurantDetails(id)),
  };
};
export default connect(
  matchStateToProps,
  mapDispatchToProps
)(RestaurantDetails);

// offsetTop: 89
// offsetLeft: 0
// offsetWidth: 891
// offsetHeight: 3652

// offsetTop: 89
// offsetLeft: 0
// offsetWidth: 891
// offsetHeight: 3652
