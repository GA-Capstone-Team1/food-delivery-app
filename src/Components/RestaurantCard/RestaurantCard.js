import React from "react";
import styles from "./RestaurantCard.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StarRateIcon from "@material-ui/icons/StarRate";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <Card className={styles.root}>
          {/* <CardHeader
            // avatar={
            //   <Avatar aria-label="recipe" className={styles.avatar}>
            //     I
            //   </Avatar>
            // }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title="Hotel Panchvati"
          /> */}
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
        <Card className={styles.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={styles.avatar}>
                H
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Hotel Panchvati"
          />
          <CardMedia
            className={styles.media}
            image="./../../public/cc10.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              North Indian, Mughalai, Seafood, Biryani, Desserts, kebabs{" "}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={styles.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={styles.avatar}>
                H
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Hotel Panchvati"
          />
          <CardMedia
            className={styles.media}
            image="./../../public/cc10.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              North Indian, Mughalai, Seafood, Biryani, Desserts, kebabs{" "}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={styles.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={styles.avatar}>
                H
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Hotel Panchvati"
          />
          <CardMedia
            className={styles.media}
            image="./../../public/cc10.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              North Indian, Mughalai, Seafood, Biryani, Desserts, kebabs{" "}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
