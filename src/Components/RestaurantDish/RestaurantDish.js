import React from "react";
import styles from "./RestaurantDish.module.scss";
import Navbar from "../../Layout/Navbar/Navbar";
import item from "../../images/sandwich.png";
import { CardMedia, Typography } from "@material-ui/core";

function RestaurantDish() {
  return (
    <>
      <div className={styles.resdetails}>
        <div className={styles.logo}>
          <CardMedia
            className={styles.media}
            image={item}
            title="restaurant logo"
          ></CardMedia>
        </div>
        <div className={styles.resdescription}>
          <Typography variant="h4">Restaurant Name</Typography>
          <Typography>Address</Typography>
          <Typography variant="h6">Food type</Typography>
          <Typography style={{ color: "#ffc120" }}>
            Opens in 7 mins 12 noon - 1 pm (today)
          </Typography>
        </div>
        <div className={styles.resoffer}>
          <CardMedia className={styles.offer}></CardMedia>
        </div>
      </div>
    </>
  );
}

export default RestaurantDish;
