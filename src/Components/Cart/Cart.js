import React from "react";
import styles from "./Cart.module.scss";
import { Typography, IconButton, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Cart() {
  return (
    <div className={styles.cart}>
      <Typography variant="h6">Cart</Typography>
      <div className={styles.restaurant}>
        <Typography variant="subtitle1" color="Primary" component="p">
          Dandga Vada
        </Typography>
        <div className={styles.itemContainer}>
          <Typography
            className={styles.dish}
            color="textSecondary"
            variant="subtitle2"
            component="p"
          >
            Dandga Vada Pav
          </Typography>

          <div className={styles.addRemoveContainer}>
            <IconButton className={styles.iconBtn}>
              <RemoveIcon className={styles.icon} />
            </IconButton>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              3
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
            Rs.1180
          </Typography>
        </div>
      </div>
      <Button variant="contained" color="primary" className={styles.btn}>
        Checkout
      </Button>
    </div>
  );
}

export default Cart;
