import React from "react";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import useHeatmap from "../styles/Heatmap/Heatmap";
import { AppBar, Typography, Box, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

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
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <Stack spacing={1} alignItems="right">
                <Stack direction="row" spacing={1}>
                  <Chip label="primary" color="primary" />
                  <Chip
                    label="success"
                    sx={{ backgroundColor: "red", color: "white" }}
                  />
                  <Chip label="success" color="success" />
                  <Chip label="success" color="success" />
                </Stack>
              </Stack>
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
                          sx={{
                            width: "400px",
                            marginTop: "10px",
                            border: "2px solid white",
                            borderRadius: "20px",
                            "&:hover": {
                              border: "2px solid #5072A7",
                            },
                          }}
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
                            <Typography
                              variant="h5"
                              component="div"
                              sx={{ fontWeight: 700 }}
                            >
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
