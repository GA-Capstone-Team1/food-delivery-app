import React from "react";
import styles from "./FoodItems.module.scss";
import image from "../../images/pizza.png";
import { Typography, Button } from "@material-ui/core";

let FoodItems = () => {
  return (
    <div className={styles.FoodItemContainer}>
      <div className={styles.FoodItems}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={image} alt="menu"></img>
        </div>
        <div className={styles.dish}>
          <Typography>Dish Name</Typography>
          <Typography>220 Rs</Typography>
        </div>
        <Button variant="outlined" className={styles.btn}>
          Add
        </Button>
      </div>
      <div className={styles.FoodItems}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={image} alt="menu"></img>
        </div>{" "}
        <div className={styles.dish}>
          <Typography>Dish Name</Typography>
          <Typography>220 Rs</Typography>
        </div>
        <Button className={styles.btn}>Add</Button>
      </div>
      <div className={styles.FoodItems}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={image} alt="menu"></img>
        </div>{" "}
        <div className={styles.dish}>
          <Typography>Dish Name</Typography>
          <Typography>220 Rs</Typography>
        </div>
        <Button variant="outlined" className={styles.btn}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default FoodItems;
