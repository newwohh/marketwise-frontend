import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import useHeatmap from "../../styles/Heatmap/Heatmap";
import { useSelector } from "react-redux";

function Heatmap(props) {
  var maps = [];
  let isProps = Boolean;
  const HeatmapClass = useHeatmap;
  const { stockpriceforheatmap } = useSelector((state) => state.marketwise);
  if (props.cryptomap) {
    maps = props.cryptomap;
    isProps = true;
  } else if (props.stocks) {
    isProps = false;
    maps = stockpriceforheatmap;
  }
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
        style={
          props.isProps
            ? setColor(
                props.el.percent_change_24h,
                HeatmapClass.cardStyle,
                HeatmapClass.cardStyletwo,
                HeatmapClass.cardStylethree,
                HeatmapClass.cardStylefour
              )
            : setColor(
                props.el.price,
                HeatmapClass.cardStyle,
                HeatmapClass.cardStyletwo,
                HeatmapClass.cardStylethree,
                HeatmapClass.cardStylefour
              )
        }
      >
        <Typography sx={{ fontSize: 14, color: "white" }} gutterBottom>
          {props.el.symbol}
        </Typography>
        <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
          {props.el.name.toUpperCase()}
        </Typography>
        <Typography sx={{ mb: 1.5, color: "white" }}>
          $
          {props.isProps
            ? parseFloat(props.el.price_usd).toFixed(2)
            : props.el.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Heatmap;
