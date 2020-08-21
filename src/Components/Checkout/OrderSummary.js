import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function OrderSummary() {
  let cartItems = useSelector((state) => state.restaurant.cart);
  let userName = useSelector((state) => state.auth.userName);

  console.log(cartItems);

  const classes = useStyles();

  let calcTotalAmount = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].totalPrice;
    }
    return total;
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding className="list">
        {cartItems.map((item) => (
          <ListItem className={classes.listItem}>
            <ListItemText primary={item.title} />
            <Typography variant="subtitle1" className={classes.total}>
              Rs. {item.totalPrice}
            </Typography>
          </ListItem>
        ))}
        <ListItem>
          <ListItemText primary="Total" className="total" />
          <Typography variant="subtitle1" className={classes.total}>
            Rs.{calcTotalAmount()}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{userName}</Typography>
          {/* <Typography gutterBottom>{addresses.join(', ')}</Typography> */}
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
