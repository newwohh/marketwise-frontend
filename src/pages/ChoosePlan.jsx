import React from "react";
import SignInNavbar from "../components/SignIn/SignInNavBar/SignInNavbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { List, ListItem } from "@mui/material";

let plansInformation = [
  {
    title: "Starter",
    subtitle: "Free",
    bill: "billed yearly",
    features: [
      "Can track only one market",
      "Access Charts",
      "Access Heatmap",
      "Cannot Access Invest Simulator",
      "No Subscription",
    ],
  },
  {
    title: "Basic",
    subtitle: "$9.99",
    bill: "billed yearly",
    features: [
      "Can track two market",
      "Access Charts",
      "Access Heatmap",
      "Cannot Access Invest Simulator",
      "Unlimited Subscription",
    ],
  },
  {
    title: "Premium",
    subtitle: "$14.99",
    bill: "billed yearly",
    features: [
      "Can track all Three market",
      "Access Charts",
      "Access Heatmap",
      "Access Invest Simulator",
      "Unlimited Subscription",
      "Access to Free Course",
    ],
  },
];

function ChoosePlan() {
  return (
    <React.Fragment>
      <SignInNavbar />
      <main
        style={{
          backgroundColor: "#F0F8FF",
          height: "950px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <section>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Typography variant="h2" gutterBottom sx={{ color: "#002244" }}>
              CHOOSE PLAN
            </Typography>
            <Grid
              container
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {plansInformation.map((el, i) => {
                return (
                  <Grid item>
                    <Card sx={{ minWidth: 275, padding: "50px" }}>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                        >
                          {el.title}
                        </Typography>
                        <Typography variant="h5" component="div">
                          {el.subtitle}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {el.bill}
                        </Typography>
                        <List>
                          <ListItem
                            sx={{
                              backgroundColor: "#F0F8FF",
                            }}
                          >
                            <Typography>{el.features[0]}</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography>{el.features[1]}</Typography>
                          </ListItem>
                          <ListItem
                            sx={{
                              backgroundColor: "#F0F8FF",
                            }}
                          >
                            <Typography>{el.features[2]}</Typography>
                          </ListItem>
                          <ListItem>
                            <Typography>{el.features[3]}</Typography>
                          </ListItem>
                          <ListItem
                            sx={{
                              backgroundColor: "#F0F8FF",
                            }}
                          >
                            <Typography>{el.features[4]}</Typography>
                          </ListItem>
                        </List>
                      </CardContent>
                      <CardActions
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          size="large"
                          variant="outlined"
                          sx={{ color: "#002244" }}
                        >
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default ChoosePlan;
