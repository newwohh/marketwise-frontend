import React from "react";
import SignInNavbar from "../components/SignIn/SignInNavBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { plansInformation } from "../dev-data/data";
import ChoosePlanCard from "../components/ChoosePlan/ChoosePlanCard";
import { useScrollToTop } from "../actions/actions";
import { titleHandler } from "../handler/titleHandler";

function ChoosePlan() {
  useScrollToTop();
  titleHandler("Choose Plan");

  return (
    <React.Fragment>
      <SignInNavbar />
      <main
        style={{
          backgroundColor: "#F0F8FF",
          height: "100vh",
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
                "@media (max-width: 1000px)": {
                  marginTop: 0,
                },
              }}
            >
              {plansInformation.map((el, i) => {
                return (
                  <Grid
                    item
                    sx={{ "@media (max-width: 1000px)": { margin: 2 } }}
                  >
                    <ChoosePlanCard el={el} key={i} />
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
