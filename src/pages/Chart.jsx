import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import { Divider, Typography } from "@mui/material";
import useChartStyles from "../styles/Chart.js/Chart";
let tvScriptLoadingPromise;
function Chart(props) {
  const ChartClasses = useChartStyles();
  const pricesOf = props.crypto;
  const { id } = useParams();
  console.log(id);
  const onLoadScriptRef = useRef();
  useEffect(() => {
    onLoadScriptRef.current = createWidget;
    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;
        document.head.appendChild(script);
      });
    }
    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );
    return () => (onLoadScriptRef.current = null);
    function createWidget() {
      if (
        document.getElementById("tradingview_4d272") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: id,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_4d272",
        });
      }
    }
  }, []);

  // console.log(pricesOf);

  // let map = pricesOf.filter((el) => el.symbol === id);
  // map = map[0];

  return (
    <React.Fragment>
      <NavBar />

      <div className={ChartClasses.containerchart}>
        <div style={{ marginLeft: "50px" }}>
          <div style={{ marginTop: "80px" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                textDecoration: "underline",
                color: "#002244",
              }}
            >
              {/* {map.name} */}
            </Typography>
            <Divider />
          </div>
          <div className="tradingview-widget-container">
            <div id="tradingview_4d272" className={ChartClasses.chartclass} />
          </div>
        </div>
        <div style={{ marginTop: "100px", width: "500px", marginLeft: "20px" }}>
          <Typography align="center">About</Typography>
          <Divider />
          {/* <Typography
            variant="p"
            sx={{ fontSize: "20px", color: "grey" }}
          >{`${map.name} is a crpyto currency coin or called as ${map.symbol} for this currency the total volume for last 24hr is $${map.volume_24h_usd} with a market cap of $${map.market_cap_usd}.Which has a total supply of #${map.total_suply}`}</Typography> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Chart;
