import React from "react";
import styles from "./FiltersSidebar.module.scss";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";

const FiltersSideBar = () => {
  const handleDishType = (e) => {
    e.preventDefault();
    console.log(e.target.innerHTML);
  };
  return (
    <div className={styles.filterSideBarContainer}>
      <Typography className={styles.head}>Filters</Typography>
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
            checked={true}
            value="non-veg"
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </Box>
      </div>
      <div>
        <Typography className={styles.filterType}>Cuisines</Typography>
        <Box className={styles.filterContainer}>
          <Typography
            value="north-indian"
            onClick={(e) => handleDishType(e)}
            variant="1"
            className={styles.filterName}
          >
            North Indian
          </Typography>
          <Typography>12</Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography variant="1" className={styles.filterName}>
            Chinese
          </Typography>
          <Typography>12</Typography>
        </Box>{" "}
        <Box className={styles.filterContainer}>
          <Typography variant="1" className={styles.filterName}>
            Desserts
          </Typography>
          <Typography>12</Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography variant="1" className={styles.filterName}>
            Beverages
          </Typography>
          <Typography>12</Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography variant="1" className={styles.filterName}>
            Bakery
          </Typography>
          <Typography>12</Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography variant="1" className={styles.filterName}>
            South Indian
          </Typography>
          <Typography>12</Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography variant="1" className={styles.filterName}>
            Street Food
          </Typography>
          <Typography>12</Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography variant="1" className={styles.filterName}>
            Mughlai
          </Typography>
          <Typography>12</Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography variant="1" className={styles.filterName}>
            Biryani
          </Typography>
          <Typography>12</Typography>
        </Box>
      </div>
      <div>
        <Typography className={styles.filterType}>Sort By</Typography>
        <Box className={styles.filterContainer}>
          <Typography variant="1" className={styles.filterName}>
            Poupularity - high to low
          </Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography variant="1" className={styles.filterName}>
            Rating - high to low
          </Typography>
        </Box>{" "}
        <Box className={styles.filterContainer}>
          <Typography variant="1" className={styles.filterName}>
            Cost - high to low
          </Typography>
        </Box>
        <Box className={styles.filterContainer}>
          <Typography variant="1" className={styles.filterName}>
            Cost - low to high
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default FiltersSideBar;
