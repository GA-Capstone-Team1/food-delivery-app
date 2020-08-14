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

let RestaurantDetails = ({ menus, restaurantDetails, cart }) => {
  const [visible, setVisible] = useState(false);
  let topref = useRef();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

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
            <div className={styles.logo}>
              <CardMedia
                className={styles.media}
                image={restaurantDetails.featured_image}
                title="restaurant logo"
              ></CardMedia>
            </div>
            <div className={styles.resdescription}>
              <Typography variant="h4">{restaurantDetails.name}</Typography>
              <Typography>{restaurantDetails.location.address}</Typography>
              <Typography variant="h6">{restaurantDetails.cuisines}</Typography>

              <Typography style={{ color: "#ffc120" }}>
                {restaurantDetails.timings}
              </Typography>
            </div>
            {restaurantDetails.offers.length !== 0 ? (
              <div className={styles.resoffer}>
                <CardMedia className={styles.offer}></CardMedia>
              </div>
            ) : null}
          </div>

          <div className={styles.searchDish}>
            <SearchDish></SearchDish>
          </div>
          <div className={styles.bottom}>
            <div className={styles.FoodItems}>
              <div className={styles.tab}>
                <TabBarOverviewMenu></TabBarOverviewMenu>
              </div>
              {menus === true ? (
                <div className={styles.items}>
                  <FoodItems></FoodItems>
                </div>
              ) : null}
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

export default connect(matchStateToProps)(RestaurantDetails);

// offsetTop: 89
// offsetLeft: 0
// offsetWidth: 891
// offsetHeight: 3652

// offsetTop: 89
// offsetLeft: 0
// offsetWidth: 891
// offsetHeight: 3652
