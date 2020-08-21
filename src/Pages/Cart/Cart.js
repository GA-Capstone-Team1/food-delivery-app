import React from "react";
import styles from "./Cart.module.scss";
import Cartt from "../../Components/RestaurantCart/Cart";
import { Typography } from "@material-ui/core";
import Navbar from "../../Layout/Navbar/Navbar";

const Cart = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <Typography variant="h4" className={styles.head}>
          Cart
        </Typography>
        <div className={styles.cart}>
          <Cartt></Cartt>
        </div>
      </div>
    </>
  );
};

export default Cart;
