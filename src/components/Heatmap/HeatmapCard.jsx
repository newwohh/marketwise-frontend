import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import useHeatmap from "../../styles/Heatmap/Heatmap";
import { setColorForHeatmap } from "../../actions/actions";

function Heatmap(props) {
  let isProps = Boolean;
  const HeatmapClass = useHeatmap;

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
          isProps
            ? setColorForHeatmap(
                props.el.percent_change_24h,
                HeatmapClass.cardStyle,
                HeatmapClass.cardStyletwo,
                HeatmapClass.cardStylethree,
                HeatmapClass.cardStylefour
              )
            : setColorForHeatmap(
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
