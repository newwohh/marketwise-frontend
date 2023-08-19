import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { MyContext } from "../../context/Context";
import { createPayment } from "../../api";

function ChoosePlanCard(props) {
  const { user } = useContext(MyContext);
  let price = props.el.subtitle;
  let parsedInt = parseFloat(price) * 100;

  return (
    <Card sx={{ minWidth: 275, padding: "50px" }} key={props.i}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {props.el.title}
        </Typography>
        <Typography variant="h5" component="div">
          ${price}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.el.bill}
        </Typography>
        <List>
          <ListItem
            sx={{
              backgroundColor: "#F0F8FF",
            }}
          >
            <Typography>{props.el.features[0]}</Typography>
          </ListItem>
          <ListItem>
            <Typography>{props.el.features[1]}</Typography>
          </ListItem>
          <ListItem
            sx={{
              backgroundColor: "#F0F8FF",
            }}
          >
            <Typography>{props.el.features[2]}</Typography>
          </ListItem>
          <ListItem>
            <Typography>{props.el.features[3]}</Typography>
          </ListItem>
          <ListItem
            sx={{
              backgroundColor: "#F0F8FF",
            }}
          >
            <Typography>{props.el.features[4]}</Typography>
          </ListItem>
        </List>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="large"
          variant="outlined"
          sx={{ color: "#002244" }}
          onClick={() => createPayment(parsedInt, props.el.title, user)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default ChoosePlanCard;
