import React, { useEffect } from "react";
import styles from "./RestaurantDetails.module.scss";
import Cart from "../../Components/RestaurantCart/Cart";
import SearchDish from "../../Components/SearchDish/SearchDish";
import Navbar from "../../Layout/Navbar/Navbar";
import FoodItems from "../../Components/FoodItems/FoodItems";
import TabBarOverviewMenu from "../../Components/TabBarOverviewMenus/TabBarOverviewMenu";
import RestaurantDish from "../../Components/RestaurantDish/RestaurantDish";
import { connect } from "react-redux";
import VerticalTabs from "../../Components/VerticalTab/VerticalTab";
import { Typography, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { restaurantDetails } from "../../Redux/Services/Actions";
import TuneIcon from "@material-ui/icons/Tune";
import { foodMenus } from "../../Redux/UIModals/Actions";

let RestaurantDetails = ({
  foodMenus,
  setFoodMenus,
  menus,
  restaurantDetails,
  cart,
  restarantId,
}) => {
  const params = useParams();
  console.log(params);

  useEffect(() => {
    restarantId(params.resId);
  }, [params.resId, restarantId]);

  const handlemenus = () => {
    setFoodMenus();
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

              {menus === true ? (
                <>
                  <div className={styles.menus} onClick={() => handlemenus()}>
                    <TuneIcon />
                    <Button>Menus</Button>
                  </div>
                  {foodMenus === true ? (
                    <div className={styles.verticalTabMob}>
                      <VerticalTabs></VerticalTabs>
                    </div>
                  ) : null}
                  <div className={styles.verticalTab}>
                    <VerticalTabs></VerticalTabs>
                  </div>

                  <div className={styles.items}>
                    <FoodItems></FoodItems>
                  </div>
                </>
              ) : (
                <div> </div>
              )}
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
    foodMenus: state.ui.foodMenus,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    restarantId: (id) => dispatch(restaurantDetails(id)),
    setFoodMenus: () => dispatch(foodMenus()),
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
