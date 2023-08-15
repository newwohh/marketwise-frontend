import React, { useEffect } from "react";
import useHeatmap from "../styles/Heatmap/Heatmap";
import HeatmapCard from "../components/Heatmap/HeatmapCard";
import { AppBar, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SecurityInfoNavbar from "../components/SecurityInfo/SecurityInfoContent/SecurityInfoNavbar";
import { useDispatch, useSelector } from "react-redux";
import { getStockPricesforHeatMap } from "../reducers/reducers";
import { heatmapData, useScrollToTop } from "../actions/actions";

function Heatmap(props) {
  let maps = [],
    isProps = Boolean;
  const { stockpriceforheatmap } = useSelector((state) => state.marketwise);
  const dispatch = useDispatch();
  useScrollToTop();

  useEffect(() => dispatch(getStockPricesforHeatMap()), [dispatch]);

  let data = heatmapData(props, stockpriceforheatmap);
  maps = data.maps;
  isProps = data.isProps;
  const HeatmapClass = useHeatmap;

  return (
    <React.Fragment>
      <SecurityInfoNavbar />
      <Box sx={HeatmapClass.containermap}>
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
                  sx={{
                    "@media (max-width:1000px)": {
                      display: "flex",
                      flexDirection: "column",
                      width: "100px",
                    },
                  }}
                >
                  {maps.map((el, i) => {
                    return (
                      <Grid
                        key={i}
                        item
                        xs={3}
                        sx={{
                          "@media (max-width:1000px)": {
                            // width: "10px",
                          },
                        }}
                      >
                        <HeatmapCard el={el} key={i} isProps={isProps} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </div>
          </div>
        </div>
      </Box>
    </React.Fragment>
  );
}

export default Heatmap;
