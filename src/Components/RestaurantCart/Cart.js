import React from "react";
import styles from "./Cart.module.scss";
import { Typography, IconButton, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { connect, useDispatch } from "react-redux";
import { incrementItem, decrementItem } from "../../Redux/Restaurant/Actions";
import { useHistory } from "react-router-dom";

function Cart({ cartItems, restaurantDetails }) {
  const history = useHistory();
  console.log(cartItems);
  let dispatch = useDispatch();
  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };

  console.log(cartItems);

  const handleCheckout = () => {
    history.push("/checkout");
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };
  let calcTotalAmount = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].totalPrice;
    }
    return total;
  };

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
                    <RemoveIcon
                      onClick={() => handleDecrement(item.recipe_id)}
                      className={styles.icon}
                    />
                  </IconButton>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.items}
                  </Typography>
                  <IconButton className={styles.iconBtn}>
                    <AddIcon
                      onClick={() => handleIncrement(item.recipe_id)}
                      className={styles.icon}
                    />
                  </IconButton>
                </div>
                <Typography
                  className={styles.price}
                  variant="subtitle2"
                  color="textSecondary"
                  component="p"
                >
                  {`Rs. ${item.totalPrice}`}
                </Typography>
              </div>
            ))
          : null}
      </div>
      <Typography>Total Price : Rs. {calcTotalAmount()}</Typography>

      <Button
        variant="contained"
        style={{ backgroundColor: "rgb(255, 193, 32)", color: "#fff" }}
        className={styles.btn}
        onClick={() => handleCheckout()}
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
