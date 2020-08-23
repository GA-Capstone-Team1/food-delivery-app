import React from "react";
import styles from "./RestaurantDish.module.scss";
import { CardMedia, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { connect } from "react-redux";

function RestaurantDish({ restaurantDetails }) {
  console.log(restaurantDetails);
  return (
    <>
      <div className={styles.logo}>
        <CardMedia
          className={styles.media}
          image={restaurantDetails.featured_image}
          title="restaurant logo"
        ></CardMedia>
      </div>
      <div className={styles.resdescription}>
        <Typography variant="h4">{restaurantDetails.name}</Typography>
        <div className={styles.ratings}>
          <Typography color="textSecondary">User Ratings:</Typography>
          <Rating
            name="half-rating"
            color={`#${restaurantDetails.user_rating.rating_color}`}
            value={restaurantDetails.user_rating.aggregate_rating}
            precision={0.5}
            readOnly
          ></Rating>
          <Typography>
            {restaurantDetails.user_rating.aggregate_rating}
          </Typography>
        </div>

        <Typography variant="subtitle" className={styles.cuisines}>
          {restaurantDetails.cuisines}
        </Typography>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          className={styles.address}
        >
          {restaurantDetails.location.address}
        </Typography>
        <Typography style={{ color: "#ffc120" }}>
          {restaurantDetails.timings}
        </Typography>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    restaurantDetails: state.service.restaurantDetails,
  };
};

export default connect(mapStateToProps)(RestaurantDish);
