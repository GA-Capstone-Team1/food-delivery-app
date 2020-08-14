import React, { useEffect, useState } from "react";
import styles from "./FoodItems.module.scss";
import { Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { searchDishes } from "../../Redux/Services/Actions";
import VerticalTabs from "../VerticalTab/VerticalTab";
import data from "../../Services/DishesData.json";
import { foodCart } from "../../Redux/Restaurant/Actions";
import Cart from "../Cart/Cart";

let FoodItems = ({ searchDishes, foodMenus, selectedMenu, addtoCart }) => {
  // let query = "ice cream";
  const [menus, setMenus] = useState();
  let arr = Object.entries(data).filter(([key, value]) => {
    if (key === selectedMenu) {
      return value;
    }
  });

  console.log("hello");

  const handleAddCart = (item) => {
    console.log(item);
    addtoCart(item);
  };

  setTimeout(() => {
    setMenus(arr[0][1]);
  }, 0);

  return (
    <div className={styles.container}>
      <div className={styles.verticalTab}>
        <VerticalTabs></VerticalTabs>
      </div>
      {menus ? (
        <>
          <div className={styles.FoodItemContainer}>
            {menus.map((item) => (
              <div key={item.recipe_id} className={styles.FoodItems}>
                <div className={styles.left}>
                  <div className={styles.imgContainer}>
                    <img
                      className={styles.img}
                      src={item.image_url}
                      alt="menu"
                    ></img>
                  </div>
                  <div className={styles.dish}>
                    <Typography className={styles.title}>
                      {item.title}
                    </Typography>
                    <Typography className={styles.price}>
                      {"Rs." + item.price}
                    </Typography>
                  </div>
                </div>
                <div className={styles.btnContainer}>
                  <Button
                    variant="outlined"
                    className={styles.btn}
                    onClick={() => handleAddCart(item)}
                  >
                    Add
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    foodMenus: state.service.foodMenus,
    selectedMenu: state.restaurant.menu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchDishes: (query) => dispatch(searchDishes(query)),
    addtoCart: (item) => dispatch(foodCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodItems);
