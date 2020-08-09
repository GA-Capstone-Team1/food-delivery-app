import React, { useState, useContext } from "react";
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
  console.log(restaurants.restaurants);

  // if (restaurants) {
  //   restaurants.restaurants.map((value, key) =>
  //     console.dir(key + ":" + value.restaurant.name)
  //   );
  // }

  const handleRestaurantClick = (id) => {};

  if (restaurants) {
    return (
      <>
        <div className={styles.cardContainer}>
          {restaurants.restaurants.map((value, key) => (
            <Card
              className={styles.root}
              onClick={(e) => handleRestaurantClick(value.restaurant.id)}
              key={value.restaurant.id}
            >
              <CardMedia
                className={styles.media}
                image={value.restaurant.thumb}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="h6">{value.restaurant.name}</Typography>
                <Paper
                  style={{ backgroundColor: "#ffffff" }}
                  className={styles.startContainer}
                >
                  <Typography variant="subtitle2">
                    {value.restaurant.user_rating.aggregate_rating}
                  </Typography>
                  <StarRateIcon className={styles.star}></StarRateIcon>
                </Paper>
                <Typography variant="body2" color="textSecondary" component="p">
                  Pizza, Fast Food
                </Typography>
                <div className={styles.list}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {`Rs ${value.restaurant.average_cost_for_two} for Two`}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {value.restaurant.timings}
                  </Typography>
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <Button>Order</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </>
    );
  } else {
    return <div>Loading</div>;
  }
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
