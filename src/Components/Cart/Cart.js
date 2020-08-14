import React, { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import { Typography, IconButton, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { connect } from "react-redux";

function Cart({ cartItems, restaurantDetails }) {
  console.log(cartItems);
  return (
    <div className={styles.cart}>
      <div className={styles.restaurant}>
        {restaurantDetails ? (
          <Typography variant="subtitle1" color="Primary" component="p">
            {restaurantDetails.name}
          </Typography>
        ) : null}

        {cartItems.length !== 0
          ? cartItems.map((item) => (
              <div className={styles.itemContainer}>
                <Typography
                  className={styles.dish}
                  key={item.recipe_id}
                  color="textSecondary"
                  variant="subtitle2"
                  component="p"
                >
                  {item.title}
                </Typography>

                <div className={styles.addRemoveContainer}>
                  <IconButton className={styles.iconBtn}>
                    <RemoveIcon className={styles.icon} />
                  </IconButton>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                  >
                    1
                  </Typography>
                  <IconButton className={styles.iconBtn}>
                    <AddIcon className={styles.icon} />
                  </IconButton>
                </div>
                <Typography
                  className={styles.price}
                  variant="subtitle2"
                  color="textSecondary"
                  component="p"
                >
                  {`Rs. ${item.price}`}
                </Typography>
              </div>
            ))
          : null}
      </div>

      <Button
        variant="contained"
        style={{ backgroundColor: "rgb(255, 193, 32)", color: "#fff" }}
        className={styles.btn}
      >
        Checkout
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.restaurant.cart,
    restaurantDetails: state.service.restaurantDetails,
  };
};

export default connect(mapStateToProps)(Cart);
