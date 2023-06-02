import React from "react";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import useHeatmap from "../styles/Heatmap/Heatmap";
import { AppBar, Typography, Box, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function Heatmap(props) {
  console.log(props.cryptomap);
  let maps = props.cryptomap;
  const HeatmapClass = useHeatmap();
  const a = parseFloat(props.cryptomap[0].percent_change_24h);
  const b = parseFloat(props.cryptomap[0].percent_change_1h);
  console.log(a, b);
  const setColor = (lastDay, themeOne, themeTwo, themeThree, themeFour) => {
    if (lastDay > 1) {
      return themeOne;
    } else if (lastDay < 0) {
      return themeTwo;
    } else if (lastDay > 0 && lastDay < 1) {
      return themeThree;
    } else {
      return themeFour;
    }
  };
  return (
    <React.Fragment>
      <NavBar />
      <div className={HeatmapClass.containermap}>
        <div>
          <Typography variant="h2">Heatmap</Typography>
          <Typography variant="h4">Cryptocurrency</Typography>
        </div>
        <div>
          <div>
            <AppBar
              position="relative"
              sx={{
                padding: "10px",
                backgroundColor: "#002244",
                width: "100%",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
              }}
            >
              <Typography>Stocks</Typography>
            </AppBar>
          </div>
          <div>
            <div>
              <Box>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 5 }}
                >
                  {maps.map((el, i) => {
                    return (
                      <Grid item xs={3}>
                        <Card
                          variant="outlined"
                          sx={{ width: "400px", marginTop: "10px" }}
                        >
                          <CardContent
                            className={setColor(
                              el.percent_change_24h,
                              HeatmapClass.cardStyle,
                              HeatmapClass.cardStyletwo,
                              HeatmapClass.cardStylethree,
                              HeatmapClass.cardStylefour
                            )}
                          >
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              {el.symbol}
                            </Typography>
                            <Typography variant="h5" component="div">
                              {el.name.toUpperCase()}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              ${parseFloat(el.price_usd).toFixed(2)}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Heatmap;
