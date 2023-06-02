import React from "react";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import useHeatmap from "../styles/Heatmap/Heatmap";
import {
  AppBar,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function Heatmap(props) {
  console.log(props.cryptomap);
  let maps = props.cryptomap;
  const HeatmapClass = useHeatmap();
  const a = parseFloat(props.cryptomap[0].percent_change_24h);
  const b = parseFloat(props.cryptomap[0].percent_change_1h);
  console.log(a, b);
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
                {maps.map((el, i) => {
                  return (
                    <Card variant="outlined" sx={{ width: "400px" }}>
                      <CardContent
                        className={
                          el.percent_change_1h > 0
                            ? HeatmapClass.cardStyle
                            : HeatmapClass.cardStyletwo
                        }
                      >
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                          be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          adjective
                        </Typography>
                        <Typography variant="body2">
                          well meaning and kindly.
                          <br />
                          {'"a benevolent smile"'}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
                  );
                })}
              </Box>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Heatmap;
