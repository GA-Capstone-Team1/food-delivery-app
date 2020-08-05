import React from "react";
import styles from "./RestaurantCard.module.scss";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import StarRateIcon from "@material-ui/icons/StarRate";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

function RecipeReviewCard({ restaurants, restaurantQuery }) {
  console.log(restaurants);
  console.log(restaurantQuery);

  if (restaurantQuery) {
    // restaurants.filter((restaurant) => {
    //   return;
    // });
  }
  // let restaurantList = restaurants;
  return (
    <>
      <div className={styles.cardContainer}>
        <Card className={styles.root}>
          <CardMedia
            className={styles.media}
            image="./../../public/cc10.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="h6">Domino's Pizza</Typography>
            <Paper
              style={{ backgroundColor: "#ffffff" }}
              className={styles.startContainer}
            >
              <Typography variant="subtitle2">5</Typography>
              <StarRateIcon className={styles.star}></StarRateIcon>
            </Paper>
            <Typography variant="body2" color="textSecondary" component="p">
              Pizza, Fast Food
            </Typography>
            <div className={styles.list}>
              <Typography variant="body2" color="textSecondary" component="p">
                Rs 350 for Two
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                34mins
              </Typography>
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <Button>Order</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.service.locationRestaurants,
    restaurantQuery: state.service.restaurantQuery,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeReviewCard);
