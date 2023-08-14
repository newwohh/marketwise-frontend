import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import useContentTopStyles from "../../../../styles/Home/ContentTop";

function ContentTopCard(props) {
  const contentTopClasses = useContentTopStyles;
  return (
    <div style={contentTopClasses.secondivsecurity} key={props.i}>
      <Card
        sx={{
          width: 800,
          height: "150px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F0F8FF",
          color: "#002244",
          transition: "transform 0.3s",
          "&:hover": {
            boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
          },
          "@media (max-width: 1000px)": {
            flexDirection: "column",
            height: "400px",
          },
        }}
      >
        <CardContent
          sx={{
            "@media (max-width: 1000px)": {
              width: "390px",
            },
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2">{props.description}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContentTopCard;
