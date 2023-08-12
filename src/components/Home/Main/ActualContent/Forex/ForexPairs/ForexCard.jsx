import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function ForexCard(props) {
  return (
    <Card
      key={props.i}
      sx={{
        margin: "25px",
        backgroundColor: "#F0F8FF",
        color: "#002244",
        display: "flex",
        justifyContent: "flex",
        alignItems: "center",
        width: "250px",
        height: 200,
        padding: 1,
        transition: "transform 0.3s",
        boxShadow: "0px 0px 0px 5px rgba(0, 0, 0, 0.05)",
        cursor: "pointer",
        "&:hover": {
          color: "#002244",
          backgroundColor: "#E1EBEE",
          boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
        },
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, fontFamily: "Malgun Gothic" }}
        >
          {props.data ? props.data.symbol : "Currency Symbol"}
        </Typography>

        <Button
          variant="outlined"
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            width: "150px",
            height: 30,
            fontSize: "10px",
            borderRadius: 13,
            color: "grey",
            "&:hover": { backgroundColor: "#002244", color: "white" },
          }}
        >
          {props.data ? props.data.currency_group : "Sorry couldnt fetch data"}
        </Button>
        <Typography varian="p">
          {props.data ? props.data.currency_base : "Currency Base"}
        </Typography>
        <Typography varian="h5">
          {props.data ? props.data.currency_quote : "Currency Quote"}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ForexCard;
