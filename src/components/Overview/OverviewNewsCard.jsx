import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useOverviewStyles from "../../styles/Overview/Overview";

function OverviewNewsCard(props) {
  const OverviewClasses = useOverviewStyles;

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "500px",
        borderRadius: "25px",
        overflow: "auto",
        padding: "10px",
      }}
    >
      <CardMedia
        component="img"
        alt="No Image Read the Article"
        height="140"
        image={props.el.image_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link style={OverviewClasses.cardlink}>{props.el.title}</Link>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ height: "200px", overflow: "scroll" }}
        >
          {props.el.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={props.el.article_url}
          style={OverviewClasses.overviewcardlink}
        >
          Click to see the full article
        </Link>
      </CardActions>
    </Card>
  );
}

export default OverviewNewsCard;
