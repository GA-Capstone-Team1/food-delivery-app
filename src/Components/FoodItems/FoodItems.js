import React, { useState } from "react";
import styles from "./FoodItems.module.scss";
import { Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { searchDishes } from "../../Redux/Services/Actions";
import data from "../../Services/DishesData.json";
import { foodCart } from "../../Redux/Restaurant/Actions";

let FoodItems = ({
  searchDishes,
  foodMenus,
  selectedMenu,
  addtoCart,
  cartItems,
}) => {
  const [menus, setMenus] = useState();
  let arr = Object.entries(data).filter(([key, value]) => {
    let val;
    if (key === selectedMenu) {
      val = value;
    }

    return val;
  });

  console.log("hello");

  const handleAddCart = (item) => {
    console.log(parseInt(item.price), item.price);
    addtoCart(
      item.recipe_id,
      item.title,
      parseInt(item.price),
      1,
      parseInt(item.price)
    );
  };

  setTimeout(() => {
    setMenus(arr[0][1]);
  }, 0);

  return (
    <div className={styles.container}>
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
    cartItems: state.restaurant.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchDishes: (query) => dispatch(searchDishes(query)),
    addtoCart: (id, title, price, items, tprice) =>
      dispatch(foodCart(id, title, price, items, tprice)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodItems);
