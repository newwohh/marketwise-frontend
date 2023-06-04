import React from "react";
import useHeatmap from "../styles/Heatmap/Heatmap";
import { AppBar, Typography, Box, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SecurityInfoNavbar from "../components/SecurityInfo/SecurityInfoContent/SecurityInfoNavbar";
import { useSelector } from "react-redux";

const get = async () => {
  const url =
    "https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=07721059f040ffb9f024f729669f5f5e";
  const data = await fetch(url);
  const res = data.json();
  return console.log(res);
};

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
  const { stockprice } = useSelector((state) => state.news);
  console.log(stockprice);
  get();
  return (
    <React.Fragment>
      <SecurityInfoNavbar />
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
                backgroundColor: "#5D76A9",
                width: "100%",
                height: "50px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <Stack spacing={1} alignItems="right">
                <Stack direction="row" spacing={1}>
                  <Chip
                    label="Loss"
                    sx={{ backgroundColor: "#DE3163", color: "white" }}
                  />
                  <Chip
                    label="Danger"
                    sx={{ backgroundColor: "#E52B50", color: "white" }}
                  />
                  <Chip
                    label="Safe"
                    sx={{ backgroundColor: "#008B8B", color: "white" }}
                  />
                  <Chip
                    label="Profitable"
                    sx={{ backgroundColor: "#03C03C", color: "white" }}
                  />
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
                              sx={{ fontSize: 14, color: "white" }}
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
                            <Typography sx={{ mb: 1.5, color: "white" }}>
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
