import React, { useEffect } from "react";
import useHeatmap from "../styles/Heatmap/Heatmap";
import { AppBar, Typography, Box, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SecurityInfoNavbar from "../components/SecurityInfo/SecurityInfoContent/SecurityInfoNavbar";
import { useDispatch, useSelector } from "react-redux";
import { getStockPricesforHeatMap } from "../store/store-actions";
import { useLocation } from "react-router-dom";

function Heatmap(props) {
  const { stockpriceforheatmap } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  var maps = [];
  let isProps = Boolean;
  useEffect(() => {
    dispatch(getStockPricesforHeatMap());
  }, []);
  if (props.cryptomap) {
    maps = props.cryptomap;
    isProps = true;
  } else if (props.stocks) {
    isProps = false;
    maps = stockpriceforheatmap;
  }
  const HeatmapClass = useHeatmap();
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
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  return (
    <React.Fragment>
      <ScrollToTop />
      <SecurityInfoNavbar />
      <div className={HeatmapClass.containermap}>
        <div>
          <Typography variant="h2">Heatmap</Typography>
          <Typography variant="h4">
            {isProps ? "Cryptocurrency" : "Stocks"}
          </Typography>
          <Typography variant="p" gutterBottom sx={{ fontFamily: "Arial" }}>
            The Heatmap is a way to determine where liquidity is in the market
            and how liquidity-providers are behaving. In other words, it helps
            traders to determine where the actual orders in the market are being
            made.
          </Typography>
        </div>
        <div>
          <div>
            <AppBar
              position="relative"
              sx={{
                marginTop: "30px",
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
                            className={
                              isProps
                                ? setColor(
                                    el.percent_change_24h,
                                    HeatmapClass.cardStyle,
                                    HeatmapClass.cardStyletwo,
                                    HeatmapClass.cardStylethree,
                                    HeatmapClass.cardStylefour
                                  )
                                : setColor(
                                    el.price,
                                    HeatmapClass.cardStyle,
                                    HeatmapClass.cardStyletwo,
                                    HeatmapClass.cardStylethree,
                                    HeatmapClass.cardStylefour
                                  )
                            }
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
                              $
                              {isProps
                                ? parseFloat(el.price_usd).toFixed(2)
                                : el.price}
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
