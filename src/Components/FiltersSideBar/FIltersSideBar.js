import React, { useState } from "react";
import styles from "./FiltersSidebar.module.scss";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { getLocationRestaurants } from "../../Redux/Services/Actions";

const FiltersSideBar = ({ getLocationRestaurants, entityId, entityType }) => {
  let [selectedCuisine, setSelectedCuisine] = useState();
  let [sortBy, setSortBy] = useState();
  let [preference, setPreference] = useState();

  const handleDishType = (e) => {
    e.preventDefault();
    console.log(e.target.innerHTML);
    setSelectedCuisine(e.target.innerHTML);
    getLocationRestaurants(entityId, entityType, e.target.innerHTML);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.innerHTML);
    let sortQuery = e.target.innerHTML;
    let sortby = sortQuery.split("-");
    let sort = sortby[0].toLowerCase().trim();
    let order = sortby[1].toLowerCase();
    if (order === " high to low") {
      order = "desc";
    } else if (order === " low to high") {
      order = "asc";
    }
    console.log(sort, order);

    getLocationRestaurants(entityId, entityType, " ", sort, order);

    // getLocationRestaurants(entityId, entityType, e.target.innerHTML, sort);
  };
  const handlePrference = (e) => {};

  console.log(selectedCuisine);

  return (
    <div className={styles.filterSideBarContainer}>
      <Typography className={styles.head}>Filters</Typography>
      <div>
        <Typography variant="subtitle1" style={{ color: "red" }}>
          <strong>{selectedCuisine}</strong>
        </Typography>
        <Typography variant="subtitle1" style={{ color: "red" }}>
          <strong>{sortBy}</strong>
        </Typography>
        {/* <Typography variant="subtitle1" style={{ color: "red" }}>
          <strong>{selectedCuisine}</strong>
        </Typography> */}
      </div>
      <div>
        <Typography className={styles.filterType}>Preference</Typography>
        <Box className={styles.filterContainer}>
          <Typography className={styles.filterName}>Veg</Typography>
          <Checkbox
            className={styles.Checkbox}
            defaultChecked
            value="non-veg"
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </Box>
        <Box className={styles.filterContainer}>
          <Typography variant="1" className={styles.filterName}>
            Non-Veg
          </Typography>
          <Checkbox
            className={styles.Checkbox}
            value="non-veg"
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </Box>
      </div>
      <div>
        <Typography className={styles.filterType}>Cuisines</Typography>
        <div>
          <Typography>{}</Typography>
        </div>
        <Box className={styles.filterContainer}>
          <Typography
            value="north-indian"
            onClick={(e) => handleDishType(e)}
            variant="1"
            style={selectedCuisine === "North India" ? { color: "red" } : null}
            className={styles.filterName}
          >
            North Indian
          </Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography
            variant="1"
            className={styles.filterName}
            onClick={(e) => handleDishType(e)}
          >
            Chinese
          </Typography>
        </Box>{" "}
        <Box className={styles.filterContainer}>
          <Typography
            variant="1"
            className={styles.filterName}
            onClick={(e) => handleDishType(e)}
          >
            Desserts
          </Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography
            variant="1"
            className={styles.filterName}
            onClick={(e) => handleDishType(e)}
          >
            Beverages
          </Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography
            variant="1"
            className={styles.filterName}
            onClick={(e) => handleDishType(e)}
          >
            Bakery
          </Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography
            variant="1"
            className={styles.filterName}
            onClick={(e) => handleDishType(e)}
          >
            South Indian
          </Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography
            variant="1"
            className={styles.filterName}
            onClick={(e) => handleDishType(e)}
          >
            Street Food
          </Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography
            variant="1"
            className={styles.filterName}
            onClick={(e) => handleDishType(e)}
          >
            Mughlai
          </Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography
            variant="1"
            className={styles.filterName}
            onClick={(e) => handleDishType(e)}
          >
            Biryani
          </Typography>
        </Box>
      </div>
      <div>
        <Typography className={styles.filterType}>Sort By</Typography>
        <Box className={styles.filterContainer}>
          <Typography
            variant="1"
            className={styles.filterName}
            onClick={(e) => handleSortBy(e)}
          >
            Poupularity - high to low
          </Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography
            variant="1"
            className={styles.filterName}
            onClick={(e) => handleSortBy(e)}
          >
            Rating - high to low
          </Typography>
        </Box>{" "}
        <Box className={styles.filterContainer}>
          <Typography
            variant="1"
            className={styles.filterName}
            onClick={(e) => handleSortBy(e)}
          >
            Cost - high to low
          </Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography
            variant="1"
            className={styles.filterName}
            onClick={(e) => handleSortBy(e)}
          >
            Cost - low to high
          </Typography>
        </Box>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cityId: state.service.cityId,
    userLocation: state.service.userLocation,
    entityType: state.service.entity_type,
    entityId: state.service.entity_id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getLocationRestaurants: (entityId, entityType, query, sort, order) =>
      dispatch(
        getLocationRestaurants(entityId, entityType, query, sort, order)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersSideBar);
