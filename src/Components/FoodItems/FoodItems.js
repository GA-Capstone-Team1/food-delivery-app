import React, { useEffect } from "react";
import styles from "./FoodItems.module.scss";
import { Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { searchDishes } from "../../Redux/Services/Actions";

let FoodItems = ({ searchDishes, foodMenus }) => {
  let query = "cauliflower";

  useEffect(() => {
    searchDishes(query);
  }, [query, searchDishes]);

  console.log(500 * Math.random());

  console.log(foodMenus);
  return (
    <>
      {foodMenus ? (
        <div className={styles.FoodItemContainer}>
          {foodMenus.recipes.map((item) => (
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
                  <Typography>{item.title}</Typography>
                  <Typography>
                    {"Rs." + Math.floor(Math.random() * 80 + 100)}
                  </Typography>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <Button variant="outlined" className={styles.btn}>
                  Add
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    foodMenus: state.service.foodMenus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchDishes: (query) => dispatch(searchDishes(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodItems);
